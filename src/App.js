import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
import EditUser from "./components/EditUser";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit" element={<EditUser />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
