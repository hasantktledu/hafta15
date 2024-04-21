import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AnaYapi from "./routes/AnaYapi";
import ErrorPage from "./ErrorPages";
import Contact from "./routes/Contact"
import {loader as rootLoader, action as rootAction} from "./routes/AnaYapi"
import {loader as contactLoader} from "./routes/Contact"
import EditContact, {action as editAction} from "./routes/Edit";
import {action as destroyAction} from "./routes/Destroy";
import AnaIcerik from "./routes/AnaIcerik";
import Hakkinda from "./routes/Hakkinda";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AnaYapi />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <AnaIcerik /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Silme işleminde hata oluştu..</div>
      },
      {
        path: "hakkinda",
        element: <Hakkinda />
      },
    ]
  },

]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
