import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/edit/:id" element={<EditStudent />} />
        </Routes>
    );
}

export default App;