import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Checkout } from "./screens/Checkout";
import { CheckoutScreen } from "./screens/CheckoutScreen";
import { CheckoutWrapper } from "./screens/CheckoutWrapper";
import { Contact } from "./screens/Contact";
import { GiftCards } from "./screens/GiftCards";
import { Homepage } from "./screens/Homepage";
import { Preregister } from "./screens/Preregister";
import { PreregisterSuccess } from "./screens/PreregisterSuccess";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Homepage />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/preregisteru47success",
    element: <PreregisterSuccess />,
  },
  {
    path: "/checkout4",
    element: <Checkout />,
  },
  {
    path: "/checkout3",
    element: <CheckoutScreen />,
  },
  {
    path: "/preregister",
    element: <Preregister />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/checkout2",
    element: <CheckoutWrapper />,
  },
  {
    path: "/gift-cards",
    element: <GiftCards />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
