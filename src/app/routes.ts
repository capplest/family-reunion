import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Schedule } from "./components/Schedule";
import { TShirtSizes } from "./components/TShirtSizes";
import { Gallery } from "./components/Gallery";
import { Map } from "./components/Map";
import { KOAActivities } from "./components/KOAActivities";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "schedule", Component: Schedule },
      { path: "tshirts", Component: TShirtSizes },
      { path: "gallery", Component: Gallery },
      { path: "map", Component: Map },
      { path: "koa", Component: KOAActivities },
    ],
  },
], { basename: "/family-reunion" });