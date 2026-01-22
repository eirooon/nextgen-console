// pages/disasterrecovery/DisasterRecoveryLayout.jsx
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SplitPageLayout from "../../layout/SplitPageLayout";
import { subRoutes } from "../../routes/subRoutes";

function getSplitItems(parentPath) {
  return Object.entries(subRoutes)
    .filter(([, node]) => node.parent === parentPath)
    .map(([path, node]) => ({
      id: node.id || path,
      label: node.label,
      to: path, // absolute
      count: node.count ?? 0,
    }));
}

export default function DisasterRecoveryLayout() {
  const items = React.useMemo(() => getSplitItems("/disaster-recovery"), []);
  const location = useLocation();
  const navigate = useNavigate();

  const selectedId = React.useMemo(() => {
    const exact = items.find((i) => i.to === location.pathname);
    if (exact) return exact.id;

    const prefixMatches = items
      .filter((i) => location.pathname.startsWith(i.to + "/"))
      .sort((a, b) => b.to.length - a.to.length);

    return prefixMatches[0]?.id ?? items[0]?.id ?? "dr-runbooks";
  }, [items, location.pathname]);

  const handleSelect = (id) => {
    const target = items.find((i) => i.id === id);
    if (target) navigate(target.to);
  };

  return (
    <SplitPageLayout
      rootLabel="Disaster Recovery"
      items={items}
      selectedId={selectedId}
      onSelect={handleSelect}
    >
      <Outlet context={{ selectedId }} />
    </SplitPageLayout>
  );
}
