import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Signin from "./Signin";

import { RouterProvider } from "react-router-dom";
const BodyComponent = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default BodyComponent;
