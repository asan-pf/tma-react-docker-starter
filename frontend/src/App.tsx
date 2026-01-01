import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserInfoPage } from "./pages/UserInfoPage";
import { AuthPage } from "./pages/AuthPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/user", element: <UserInfoPage /> },
  { path: "/auth", element: <AuthPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
