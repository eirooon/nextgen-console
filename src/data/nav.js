import {
  LocalPolice,
  AssignmentInd,
  Assignment,
  CorporateFare,
  EventNote,
  FmdGood,
  InsertChart,
  LibraryBooks,
  Monitor,
  NotificationAdd,
  PublishedWithChanges,
  VerifiedUser,
  Settings,
  Help,
  NotificationAddSharp,
} from "@mui/icons-material";

export const navSections = [
  {
    title: "Monitor",
    items: [
      // {
      //   label: "Resilience Center",
      //   to: "/resiliencecenter",
      //   icon: LocalPolice,
      // },
      { label: "Dashboard", to: "/dashboard", icon: InsertChart },
    ],
  },
  {
    title: "Operate",
    items: [
      { label: "Jobs", to: "/jobs", icon: LibraryBooks },
      { label: "Event Logs", to: "/event-logs", icon: EventNote },
    ],
  },
  {
    title: "Manage Assets",
    items: [
      { label: "Sources", to: "/sources", icon: Monitor },
      { label: "Destinations", to: "/destinations", icon: FmdGood },
      {
        label: "Infrastructures",
        to: "/infrastructures",
        icon: CorporateFare,
      },
    ],
  },
  {
    title: "Configure Protection",
    items: [
      { label: "Policies", to: "/policies", icon: VerifiedUser },
      {
        label: "Disaster Recovery",
        to: "/disaster-recovery",
        icon: PublishedWithChanges,
      },
      {
        label: "Alert Rules",
        to: "/alert-rules",
        icon: NotificationAdd,
      },
    ],
  },
  {
    title: "Report & Audit",
    items: [
      { label: "Reports", to: "/reports", icon: Assignment },
      { label: "Audit Logs", to: "/audit-logs", icon: AssignmentInd },
    ],
  },
  {
    title: "Admin & Help",
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
      section: section.title,
    })),
  )
  .reduce((acc, r) => {
    acc[r.path] = { label: r.label, section: r.section };
    return acc;
  }, {});

export function formatSectionTitle(title = "") {
  return title.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}
