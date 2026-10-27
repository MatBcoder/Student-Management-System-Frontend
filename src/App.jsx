import {Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Login from "./pages/Login";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/students" element={<Students />} />

                    <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
                        <Route path="/students/add" element={<AddStudent />} />
                        <Route path="/students/edit/:studentNumber" element={<EditStudent />} />
                    </Route>
                    
                </Route>
            </Route>
            
        </Routes>
    );
}

export default App;