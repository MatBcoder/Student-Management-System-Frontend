import {Navigate, Outlet, useLocation} from "react-router-dom";

function ProtectedRoute({allowedRoles}) {
    const token = sessionStorage.getItem("token");
    const role = sessionStorage.getItem("role");
    const location = useLocation();

    if(!token){
        return (
        <Navigate to="/login" replace state={{ from: location }} />
        );
    }

    if(allowedRoles && !allowedRoles.includes(role)){
        return <Navigate to="/students" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;