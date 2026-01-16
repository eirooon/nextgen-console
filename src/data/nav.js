import {
  LocalPoliceOutlined,
  AssignmentIndOutlined,
  AssignmentOutlined,
  CorporateFareOutlined,
  EventNoteOutlined,
  FmdGoodOutlined,
  InsertChartOutlined,
  LibraryBooksOutlined,
  Monitor,
  NotificationAddOutlined,
  PublishedWithChangesOutlined,
  VerifiedUserOutlined,
  SettingsOutlined,
  HelpOutline,
} from "@mui/icons-material";

export const navSections = [
  {
    title: "MONITOR",
    items: [
      {
        label: "Resilience Center",
        to: "/resiliencecenter",
        icon: LocalPoliceOutlined,
      },
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
      {
        label: "Infrastructures",
        to: "/infrastructures",
        icon: CorporateFareOutlined,
      },
    ],
  },
  {
    title: "CONFIGURE PROTECTION",
    items: [
      { label: "Policies", to: "/policies", icon: VerifiedUserOutlined },
      {
        label: "Disaster Recovery",
        to: "/disaster-recovery",
        icon: PublishedWithChangesOutlined,
      },
      {
        label: "Alert Rules",
        to: "/alert-rules",
        icon: NotificationAddOutlined,
      },
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
      { label: "Settings", to: "/settings", icon: SettingsOutlined },
      { label: "Help", to: "/help", icon: HelpOutline },
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
      section: section.title,
    }))
  )
  .reduce((acc, r) => {
    acc[r.path] = { label: r.label, section: r.section };
    return acc;
  }, {});

export function formatSectionTitle(title = "") {
  return title.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}
