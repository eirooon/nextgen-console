import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import AppShell from "./layout/AppShell";

import ResilienceCenter from "./pages/resiliencecenter/ResilienceCenter";
import Dashboard from "./pages/dashboard/Dashboard";
import Jobs from "./pages/jobs/Jobs";
import EventLogs from "./pages/eventlogs/EventLogs";
import Infrastructures from "./pages/infrastructures/Infrastructures";
import Policies from "./pages/policies/Policies";
import AlertRules from "./pages/alertrules/AlertRules";
import Reports from "./pages/reports/Reports";
import AuditLogs from "./pages/auditlogs/AuditLogs";
import Settings from "./pages/settings/Settings";
import Help from "./pages/help/Help";

// Sources
import SourcesLayout from "./pages/sources/SourcesLayout";
import AllSources from "./pages/sources/AllSources";
import SourcesMachines from "./pages/sources/Machines";
import MachinesWithoutPlan from "./pages/sources/MachinesWithoutPlan";
import AgentlessVMs from "./pages/sources/AgentlessVMs";
import UNCNFSPaths from "./pages/sources/UNCNFSPaths";

// Destinations
import DestinationsLayout from "./pages/destinations/DestinationsLayout";
import RecoveryPointServers from "./pages/destinations/RecoveryPointServers";
import DataStore from "./pages/destinations/DataStores";
import CloudAccounts from "./pages/destinations/CloudAccounts";
import ACRSAccount from "./pages/destinations/ACRSAccount";
import SharedFolders from "./pages/destinations/SharedFolders";

// Disaster Recovery
import DisasterRecoveryLayout from "./pages/disasterrecovery/DisasterRecoveryLayout";
import DRRunbooks from "./pages/disasterrecovery/subpages/drrunbooks/DRRunbooks";
import DRRunbooksDetails from "./pages/disasterrecovery/subpages/drrunbooks/DRRunbooksDetails";
import InstantVMs from "./pages/disasterrecovery/subpages/InstantVMs";
import MountedRecoveryPoints from "./pages/disasterrecovery/subpages/MountedRecoveryPoints";
import VirtualStandby from "./pages/disasterrecovery/subpages/VirtualStandby";

export default function App() {
  return (
    <AppShell>
      <Routes>
        {/* Root */}
        <Route path="/" element={<Navigate to="/resiliencecenter" replace />} />

        {/* Top-level pages */}
        <Route path="/resiliencecenter" element={<ResilienceCenter />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/event-logs" element={<EventLogs />} />
        <Route path="/infrastructures" element={<Infrastructures />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/alert-rules" element={<AlertRules />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />

        {/* SOURCES (Split layout) */}
        <Route path="/sources" element={<SourcesLayout />}>
          <Route index element={<Navigate to="all-sources" replace />} />
          <Route path="all-sources" element={<AllSources />} />
          <Route path="machines" element={<SourcesMachines />} />
          <Route
            path="machines-without-plan"
            element={<MachinesWithoutPlan />}
          />
          <Route path="agentless-vms" element={<AgentlessVMs />} />
          <Route path="unc-nfs-paths" element={<UNCNFSPaths />} />
        </Route>

        {/* DESTINATIONS (Split layout) */}
        <Route path="/destinations" element={<DestinationsLayout />}>
          <Route
            index
            element={<Navigate to="recovery-point-servers" replace />}
          />
          <Route
            path="recovery-point-servers"
            element={<RecoveryPointServers />}
          />
          <Route path="data-stores" element={<DataStore />} />
          <Route path="cloud-accounts" element={<CloudAccounts />} />
          <Route
            path="arcserve-cyber-resilient-storage-accounts"
            element={<ACRSAccount />}
          />
          <Route path="shared-folders" element={<SharedFolders />} />
        </Route>

        {/* DISASTER RECOVERY (mixed: split layout + full page) */}
        <Route path="/disaster-recovery" element={<Outlet />}>
          {/* Full page route(s) under same base */}
          <Route path="dr-runbooks/new" element={<DRRunbooksDetails />} />

          {/* Split layout group */}
          <Route element={<DisasterRecoveryLayout />}>
            <Route index element={<Navigate to="dr-runbooks" replace />} />
            <Route path="dr-runbooks" element={<DRRunbooks />} />
            <Route path="instant-vms" element={<InstantVMs />} />
            <Route
              path="mounted-recovery-points"
              element={<MountedRecoveryPoints />}
            />
            <Route path="virtual-standby" element={<VirtualStandby />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/resiliencecenter" replace />} />
      </Routes>
    </AppShell>
  );
}
