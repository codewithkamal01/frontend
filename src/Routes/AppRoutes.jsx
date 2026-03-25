import { Navigate, Route, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import Misconfigurations from "../pages/Misconfigurations";
import ScanCloud from "../pages/ScanCloud";
import Logs from "../pages/Logs";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/misconfigurations" element={<Misconfigurations />} />
          <Route path="/scan-cloud" element={<ScanCloud />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
