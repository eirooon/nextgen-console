import { HomeOutlined, AssignmentIndOutlined, AssignmentOutlined, CorporateFareOutlined, EventNoteOutlined, FmdGoodOutlined, InsertChartOutlined, LibraryBooksOutlined, Monitor, NotificationAddOutlined, PublishedWithChangesOutlined, VerifiedUserOutlined, Settings, Help } from "@mui/icons-material";

export const navSections = [
  {
    title: "OVERVIEW",
    items: [
      { label: "Home", to: "/home", icon: HomeOutlined },
      { label: "Dashboard", to: "/dashboard", icon: InsertChartOutlined },
    ],
  },
  {
    title: "OPERATE",
    items: [
      { label: "Jobs", to: "/jobs", icon: LibraryBooksOutlined },
      { label: "Event Logs", to: "/event-logs", icon: EventNoteOutlined },
    ],
  },
  {
    title: "MANAGE ASSETS",
    items: [
      { label: "Sources", to: "/sources", icon: Monitor },
      { label: "Destinations", to: "/destinations", icon: FmdGoodOutlined },
      { label: "Infrastructures", to: "/infrastructures", icon: CorporateFareOutlined },
    ],
  },
  {
    title: "CONFIGURE PROTECTION",
    items: [
      { label: "Policies", to: "/policies", icon: VerifiedUserOutlined },
      { label: "Disaster Recovery", to: "/disaster-recovery", icon: PublishedWithChangesOutlined },
      { label: "Alert Rules", to: "/alert-rules", icon: NotificationAddOutlined },
    ],
  },
  {
    title: "REPORT & AUDIT",
    items: [
      { label: "Reports", to: "/reports", icon: AssignmentOutlined },
      { label: "Audit Logs", to: "/audit-logs", icon: AssignmentIndOutlined },
    ],
  },
  {
    title: "ADMIN & HELP",
    items: [
      { label: "Settings", to: "/settings", icon: Settings },
      { label: "Help", to: "/help", icon: Help },
    ],
  },
];

// Used by header for dynamic page titles
export const routeTitles = navSections
  .flatMap((s) => s.items)
  .reduce((acc, item) => {
    acc[item.to] = item.label;
    return acc;
  }, {});

export const routeMeta = navSections
  .flatMap((section) =>
    section.items.map((item) => ({
      path: item.to,
      label: item.label,
      section: section.title, // e.g. "OVERVIEW"
    }))
  )
  .reduce((acc, r) => {
    acc[r.path] = { label: r.label, section: r.section };
    return acc;
  }, {});

  export function formatSectionTitle(title = "") {
  // "OVERVIEW" -> "Overview", "REPORT & AUDIT" -> "Report & Audit"
  return title
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}