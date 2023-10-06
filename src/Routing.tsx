import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ChangeAvatar from "./pages/ChangeAvatar";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="avatar" element={<ChangeAvatar />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Routing;