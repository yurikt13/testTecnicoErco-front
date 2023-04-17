import { createBrowserRouter } from "react-router-dom";
import Country from "../views/Country";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Country />,
    },
]);


export default router
