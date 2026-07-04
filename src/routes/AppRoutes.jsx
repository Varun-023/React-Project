import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";
import Loader from "../components/Loader";
import MainLayout from "../layouts/MainLayout";

const Login = lazy(() => import("../pages/Login"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const SessionExpired = lazy(() => import("../pages/SessionExpired"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Audit = lazy(() => import("../pages/Audit"));
const Compliance = lazy(() => import("../pages/Compliance"));
const Procurement = lazy(() => import("../pages/Procurement"));
const ProcurementDetails = lazy(() => import("../pages/ProcurementDetails"));
const Reports = lazy(() => import("../pages/Reports"));
const Risk = lazy(() => import("../pages/Risk"));
const Settings = lazy(() => import("../pages/Settings"));
const Vendors = lazy(() => import("../pages/Vendors"));
const VendorProfile = lazy(() => import("../pages/VendorProfile"));
const ApprovalWorkbench = lazy(() => import("../pages/ApprovalWorkbench"));
const Notifications = lazy(() => import("../pages/Notifications"));

function AppRoutes() {

    return (

        <BrowserRouter>

            <Suspense fallback={<Loader />}>

                <Routes>

                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/session-expired" element={<SessionExpired />} />

                    <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>

                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/audit" element={<Audit />} />
                        <Route path="/compliance" element={<Compliance />} />
                        <Route path="/procurement" element={<Procurement />} />
                        <Route path="/procurement/:id" element={<ProcurementDetails />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/risk" element={<Risk />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/vendors" element={<Vendors />} />
                        <Route path="/vendors/:id" element={<VendorProfile />} />
                        <Route path="/notifications" element={<Notifications />} />
                        
                        <Route
                            path="/approvals"
                            element={
                                <RoleRoute allowedRoles={["Administrator", "Procurement Manager"]}>
                                    <ApprovalWorkbench />
                                </RoleRoute>
                            }
                        />

                    </Route>

                </Routes>

            </Suspense>

        </BrowserRouter>

    );

}

export default AppRoutes;
