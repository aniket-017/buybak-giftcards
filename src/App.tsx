import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomepageWeb } from "./screens/HomepageWeb";
import { Preregister } from "./screens/Preregister";
import { PreregisterSuccess } from "./screens/PreregisterSuccess";
import { CheckoutPopUp } from "./screens/CheckoutPopUp";
import { CheckoutPopUpScreen } from "./screens/CheckoutPopUpScreen";
import { CheckoutPopUpWrapper } from "./screens/CheckoutPopUpWrapper";
import { ContactPopUp } from "./screens/ContactPopUp";
import { GiftcardsWeb } from "./screens/GiftcardsWeb";
import { GiftcardsTablet } from "./screens/GiftcardsTablet";
import { PreRegisterPopUp } from "./screens/PreRegisterPopUp";
import { PreRegisterSuccess } from "./screens/PreRegisterSuccess";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomepageWeb />,
  },
  {
    path: "/homepageweb",
    element: <HomepageWeb />,
  },
  {
    path: "/preregister",
    element: <Preregister />,
  },
  {
    path: "/contactpopup",
    element: <ContactPopUp />,
  },
  {
    path: "/preregistersuccesspopup",
    element: <PreRegisterSuccess />,
  },
  {
    path: "/preregisterpopup",
    element: <PreRegisterPopUp />,
  },
  {
    path: "/checkoutpopup2",
    element: <CheckoutPopUp />,
  },
  {
    path: "/checkoutpopup3",
    element: <CheckoutPopUpScreen />,
  },
  {
    path: "/checkoutpopup",
    element: <CheckoutPopUpWrapper />,
  },
  {
    path: "/giftcardsu47web",
    element: <GiftcardsWeb />,
  },
  {
    path: "/giftcardstablet",
    element: <GiftcardsTablet />,
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
