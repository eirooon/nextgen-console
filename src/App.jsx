import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import AppShell from "./layout/AppShell";

import Dashboard from "./pages/dashboard/DashboardLayout";
import JobsLayout from "./pages/jobs/JobsLayout";
import EventLogs from "./pages/eventlogs/EventLogs";
import AlertRulesLayout from "./pages/alertrules/AlertRulesLayout";
import AuditLogsLayout from "./pages/auditlogs/AuditLogsLayout";
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
import ACRSAccount from "./pages/destinations/ACRSAccount";
import SharedFolders from "./pages/destinations/SharedFolders";

// Infrastructures
import InfrastructuresLayout from "./pages/infrastructures/InfrastructuresLayout";
import Hypervisors from "./pages/infrastructures/Hypervisors";
import Sites from "./pages/infrastructures/Sites";
import StorageArrays from "./pages/infrastructures/StorageArrays";
import Proxies from "./pages/infrastructures/Proxies";
import OracleHosts from "./pages/infrastructures/OracleHosts";
import CloudProtectionOrchestrator from "./pages/infrastructures/CloudProtectionOrchestrator";
import CloudAccounts from "./pages/infrastructures/CloudAccounts";

//Plans
import PlansLayout from "./pages/plans/PlansLayout";
import AllPlans from "./pages/plans/AllPlans";
import AgentBasedWindowsBackups from "./pages/plans/AgentBasedWindowsBackups";
import AgentBasedLinuxBackups from "./pages/plans/AgentBasedLinuxBackups";
import AgentBasedBackupsToACForDisasterRecovery from "./pages/plans/AgentBasedBackupsToACForDisasterRecovery";
import AgentBasedBackupsDirectlyToArserveCloud from "./pages/plans/AgentBasedBackupsDirectlyToArserveCloud";
import AgentlessBackups from "./pages/plans/AgentlessVMBackups";
import CopyFromRemotelyManagedRPS from "./pages/plans/CopyFromRemotelyManagedRPS";
import OracleDatabaseBackups from "./pages/plans/OracleDatabaseBackups";
import UNCNFSBackups from "./pages/plans/UNCNFSBackups";

// Disaster Recovery
import DisasterRecoveryLayout from "./pages/disasterrecovery/DisasterRecoveryLayout";
import DRRunbooks from "./pages/disasterrecovery/subpages/drrunbooks/DRRunbooks";
import DRRunbooksDetails from "./pages/disasterrecovery/subpages/drrunbooks/DRRunbooksDetails";
import InstantVMs from "./pages/disasterrecovery/subpages/InstantVMs";
import MountedRecoveryPoints from "./pages/disasterrecovery/subpages/MountedRecoveryPoints";
import VirtualStandby from "./pages/disasterrecovery/subpages/VirtualStandby";

//Reports
import ReportsLayout from "./pages/reports/ReportsLayout";
import BackupJobs from "./pages/reports/BackupJobs";
import DataTransfer from "./pages/reports/DataTransfer";
import ManageReportSchedules from "./pages/reports/ManageReportSchedules";
import RecoveryPoint from "./pages/reports/RecoveryPoint";
import SourceProtection from "./pages/reports/SourceProtection";
import StoredData from "./pages/reports/StoredData";

//Settings
import SettingsLayout from "./pages/settings/SettingsLayout";
import SourceGroups from "./pages/settings/SourceGroups";

export default function App() {
  return (
    <AppShell>
      <Routes>
        {/* Root */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Top-level pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<JobsLayout />} />
        <Route path="/event-logs" element={<EventLogs />} />
        <Route path="/alert-rules" element={<AlertRulesLayout />} />
        <Route path="/audit-logs" element={<AuditLogsLayout />} />
        <Route path="/support" element={<Help />} />

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
          <Route
            path="arcserve-cyber-resilient-storage-accounts"
            element={<ACRSAccount />}
          />
          <Route path="shared-folders" element={<SharedFolders />} />
        </Route>

        {/* INFRASTRUCTURES (Split layout) */}
        <Route path="/infrastructures" element={<InfrastructuresLayout />}>
          <Route index element={<Navigate to="hypervisors" replace />} />
          <Route path="hypervisors" element={<Hypervisors />} />
          <Route path="sites" element={<Sites />} />
          <Route path="storage-arrays" element={<StorageArrays />} />
          <Route path="proxies" element={<Proxies />} />
          <Route path="oracle-hosts" element={<OracleHosts />} />
          <Route
            path="cloud-protection-orchestrators"
            element={<CloudProtectionOrchestrator />}
          />
          <Route path="cloud-accounts" element={<CloudAccounts />} />
        </Route>

        {/* PLANS (Split layout) */}
        <Route path="/plans" element={<PlansLayout />}>
          <Route index element={<Navigate to="all-plans" replace />} />
          <Route path="all-plans" element={<AllPlans />} />
          <Route
            path="agent-based-windows-backups"
            element={<AgentBasedWindowsBackups />}
          />
          <Route
            path="agent-based-linux-backups"
            element={<AgentBasedLinuxBackups />}
          />
          <Route
            path="agent-based-backups-to-ac-for-disaster-recovery"
            element={<AgentBasedBackupsToACForDisasterRecovery />}
          />
          <Route
            path="agent-based-backups-directly-to-arserve-cloud"
            element={<AgentBasedBackupsDirectlyToArserveCloud />}
          />
          <Route path="agentless-backups" element={<AgentlessBackups />} />
          <Route
            path="copy-from-remotely-managed-rps"
            element={<CopyFromRemotelyManagedRPS />}
          />
          <Route
            path="oracle-database-backups"
            element={<OracleDatabaseBackups />}
          />
          <Route path="uncnfs-backups" element={<UNCNFSBackups />} />
          <Route
            path="cloud-protection-orchestrators"
            element={<CloudProtectionOrchestrator />}
          />
          <Route path="cloud-accounts" element={<CloudAccounts />} />
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

        {/* REPORTS (Split layout) */}
        <Route path="/reports" element={<ReportsLayout />}>
          <Route index element={<Navigate to="backup-jobs" replace />} />
          <Route path="backup-jobs" element={<BackupJobs />} />
          <Route path="data-transfer" element={<DataTransfer />} />
          <Route
            path="managed-report-schedules"
            element={<ManageReportSchedules />}
          />
          <Route path="recovery-point" element={<RecoveryPoint />} />
          <Route path="source-protection" element={<SourceProtection />} />
          <Route path="stored-data" element={<StoredData />} />
        </Route>

        {/* Settings (Split layout) */}
        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<Navigate to="source-groups" replace />} />
          <Route path="source-groups" element={<SourceGroups />} />
          {/* Add more settings sub-routes here */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AppShell>
  );
}
