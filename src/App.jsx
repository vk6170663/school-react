import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddStudent from "./ui/AddStudent";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={AppLayout}></Route>
        <Route path="add-student" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
