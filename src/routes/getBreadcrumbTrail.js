const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

function findBestMatch(pathname, registry) {
  const clean = normalize(pathname);
  if (registry[clean]) return clean;

  const candidates = Object.keys(registry).filter(
    (p) =>
      p !== "*" && !p.startsWith("__section__/") && clean.startsWith(p + "/")
  );

  if (!candidates.length) return null;

  candidates.sort((a, b) => b.length - a.length);
  return candidates[0];
}

export function getBreadcrumbTrail(pathname, registry) {
  const matchPath = findBestMatch(pathname, registry);
  if (!matchPath) return [];

  const trail = [];
  const visited = new Set();

  let cur = matchPath;
  while (cur && registry[cur] && !visited.has(cur)) {
    visited.add(cur);
    trail.push({ path: registry[cur].path, label: registry[cur].label });
    cur = registry[cur].parent ? normalize(registry[cur].parent) : null;
  }

  trail.reverse();
  return trail;
}
