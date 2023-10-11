import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ChangeAvatar from "./pages/ChangeAvatar";
import Archive from "./pages/Archive";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="avatar" element={<ChangeAvatar />}/>
          <Route path="archive" element={<Archive />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Routing;