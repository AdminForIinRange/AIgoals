import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home/Home.jsx";

import Pagetwo from "./pages/Home/Pagetwo.jsx";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Pagetwo" element={<Pagetwo />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
