import { routeMeta, formatSectionTitle } from "../data/nav";

/**
 * Add all top-level routes from nav.js as nodes.
 * For each top-level route, parent is its section title (as a virtual root node).
 */
export function buildRouteRegistry({ subRoutes = {} } = {}) {
  const registry = {};

  // Create virtual "section" nodes (e.g., "MANAGE ASSETS") so breadcrumbs can show section as level 1
  // We'll use a synthetic path format: "__section__/MANAGE ASSETS"
  const sectionNodePath = (sectionTitle) => `__section__/${sectionTitle}`;

  // 1) Add top-level routes (from nav.js)
  Object.entries(routeMeta).forEach(([path, meta]) => {
    const sectionPath = sectionNodePath(meta.section);

    // section node
    if (!registry[sectionPath]) {
      registry[sectionPath] = {
        path: sectionPath,
        label: formatSectionTitle(meta.section),
        parent: null,
      };
    }

    // route node
    registry[path] = {
      path,
      label: meta.label,
      parent: sectionPath,
    };
  });

  // 2) Add nested/split routes (you define parent path + label)
  // subRoutes example:
  // { "/sources/all-sources": { label: "All Sources", parent: "/sources" }, ... }
  Object.entries(subRoutes).forEach(([path, node]) => {
    registry[path] = {
      path,
      label: node.label,
      parent: node.parent || null,
    };
  });

  return registry;
}
