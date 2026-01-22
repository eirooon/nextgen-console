export const subRoutes = {
  "/sources/all-sources": {
    id: "all",
    label: "All Sources",
    parent: "/sources",
    count: 123,
  },
  "/sources/machines": {
    id: "machines",
    label: "Machines",
    parent: "/sources",
    count: 2,
  },
  "/sources/machines-without-plan": {
    id: "no-plan",
    label: "Machines without Plan",
    parent: "/sources",
    count: 30,
  },
  "/sources/agentless-vms": {
    id: "agentless",
    label: "Agentless VMs",
    parent: "/sources",
    count: 60,
  },
  "/sources/unc-nfs-paths": {
    id: "unc",
    label: "UNC/NFS Paths",
    parent: "/sources",
    count: 8,
  },
  "/destinations/recovery-point-servers": {
    id: "rps",
    label: "Recovery Point Servers",
    parent: "/destinations",
    count: 21,
  },
  "/destinations/data-stores": {
    id: "datastores",
    label: "Data Stores",
    parent: "/destinations",
    count: 21,
  },
  "/destinations/cloud-accounts": {
    id: "cloudaccounts",
    label: "Cloud Accounts",
    parent: "/destinations",
    count: 21,
  },
  "/destinations/arcserve-cyber-resilient-storage-accounts": {
    id: "acrsaccounts",
    label: "Arcserve Cyber Resilient Storage Accounts",
    parent: "/destinations",
    count: 21,
  },
  "/destinations/shared-folders": {
    id: "share-folders",
    label: "Shared Folders",
    parent: "/destinations",
    count: 21,
  },
  "/disaster-recovery/dr-runbooks": {
    id: "dr-runbooks",
    label: "DR Runbooks",
    parent: "/disaster-recovery",
    count: 18,
  },
  "/disaster-recovery/instant-vms": {
    id: "instant-vms",
    label: "Instant VMs",
    parent: "/disaster-recovery",
    count: 18,
  },
  "/disaster-recovery/mounted-recovery-points": {
    id: "mounted-recovery-points",
    label: "Mounted Recovery Points",
    parent: "/disaster-recovery",
    count: 18,
  },
  "/disaster-recovery/virtual-standby": {
    id: "virtual-standby",
    label: "Virtual Standby",
    parent: "/disaster-recovery",
    count: 18,
  },

  "/disaster-recovery/dr-runbooks/new": {
    id: "dr-runbook-new",
    label: "Add DR Runbook",
    parent: "/disaster-recovery/dr-runbooks",
  },
};
