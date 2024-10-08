import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import HomePage from "./routes/home-page";
import NewsPage, { NewsView } from "./routes/news-page";
import ContactPage from "./routes/contact-page";
import RecruitmentPage from "./routes/recruitment-page";
import { ERoute } from "./constant";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./i18next";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ERoute.HOME,
                element: <HomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: ERoute.NEWS,
                children: [
                    {
                        index: true,
                        element: <NewsPage />,
                    },
                    {
                        path: ":id",
                        element: <NewsView />,
                    },
                ],
            },
            {
                path: ERoute.RECRUITMENT,
                element: <RecruitmentPage />,
            },
            {
                path: ERoute.CONTACT,
                element: <ContactPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
