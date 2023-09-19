import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<p>Hello world!</p>} />),
    {
        basename: process.env.PUBLIC_URL
    }
);

export default router;
