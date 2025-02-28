import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CarDetails, Home, Inventory, NotFound, OnDemand } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/on-demand" element={<OnDemand />} />
      <Route path="/car/:alias" element={<CarDetails />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
