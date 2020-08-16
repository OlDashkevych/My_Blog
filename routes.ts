import { lazy } from "react";

export const path = {
  HOME: { url: "/", label: "Home" },
  POST: { url: "/post", label: "Post" },
};

export default [
  {
    path: path.HOME.url,
    label: path.HOME.label,
    exact: true,
    Component: lazy(() => import("./pages/")),
  },
  // {
  //   path: path.DETAILS.url,
  //   label: path.DETAILS.label,
  //   exact: false,
  //   Component: lazy(() => import('./views/PublicationPage')),
  // },
];
