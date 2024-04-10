import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./app/home";
import { Login } from "./app/login";
import { Register } from "./app/register";
import { Test } from "./app/test";
import { AddHotel } from "./app/add-hotel";
import { Lalit } from "./app/lalit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/lalit" element={<Lalit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
