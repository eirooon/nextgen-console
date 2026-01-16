import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./layout/AppShell";

import ResilienceCenter from "./pages/ResilienceCenter";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import EventLogs from "./pages/EventLogs";
import Sources from "./pages/Sources";
import Destinations from "./pages/Destinations";
import Infrastructures from "./pages/Infrastructures";
import Policies from "./pages/Policies";
import DisasterRecovery from "./pages/DisasterRecovery";
import AlertRules from "./pages/AlertRules";
import Reports from "./pages/Reports";
import AuditLogs from "./pages/AuditLogs";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/resiliencecenter" replace />} />
        <Route path="/resiliencecenter" element={<ResilienceCenter />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/event-logs" element={<EventLogs />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/infrastructures" element={<Infrastructures />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/disaster-recovery" element={<DisasterRecovery />} />
        <Route path="/alert-rules" element={<AlertRules />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/audit-logs" element={<AuditLogs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Navigate to="/resiliencecenter" replace />} />
      </Routes>
    </AppShell>
  );
}
