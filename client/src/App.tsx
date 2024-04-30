import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./app/login";
import { Register } from "./app/register";
import { AddHotel } from "./app/add-hotel";
import HomePage from "./app/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-hotel" element={<AddHotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
