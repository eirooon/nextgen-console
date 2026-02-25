import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SplitPageLayout from "../../layout/SplitPageLayout";
import { subRoutes } from "../../routes/subRoutes";

function getSplitItems(parentPath) {
  return Object.entries(subRoutes)
    .filter(([, node]) => node.parent === parentPath)
    .map(([path, node]) => ({
      id: node.id || path, // fallback
      label: node.label,
      to: path, // absolute path
      count: node.count ?? 0,
    }));
}

export default function InfrastructuresLayout() {
  const items = React.useMemo(() => getSplitItems("/infrastructures"), []);
  const location = useLocation();
  const navigate = useNavigate();

  const selectedId = React.useMemo(() => {
    // exact match first
    const exact = items.find((i) => i.to === location.pathname);
    if (exact) return exact.id;

    // fallback to longest prefix (supports deeper routes like /sources/machines/123)
    const prefixMatches = items
      .filter((i) => location.pathname.startsWith(i.to + "/"))
      .sort((a, b) => b.to.length - a.to.length);

    return prefixMatches[0]?.id ?? items[0]?.id ?? "all";
  }, [items, location.pathname]);

  const handleSelect = (id) => {
    const target = items.find((i) => i.id === id);
    if (target) navigate(target.to);
  };

  return (
    <SplitPageLayout
      rootLabel="Infrastructures"
      items={items}
      selectedId={selectedId}
      onSelect={handleSelect}
    >
      <Outlet context={{ selectedId }} />
    </SplitPageLayout>
  );
}
