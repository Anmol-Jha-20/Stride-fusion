import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login Component/Login.jsx";
import Signup from "./components/Login Component/Signup.jsx";
import { StateProvider } from "./Provider/StateProvider.jsx";
import reducer, { initialState } from "./reducer.js";
import Stussyy from "./Pages/Product Pages/Featured/Product Elements/Stussyy.jsx";
import CampusTerminator from "./Pages/Product Pages/Featured/Product Elements/CampusTerminator.jsx";
import SparxSxO661g from "./Pages/Product Pages/Featured/Product Elements/SparxSx0661g.jsx";
import Checkout from "./Checkout/Checkout.jsx";
import Payment from "./Payment/Payment.jsx";
import {
  SparxSx0414g,
  RedTapeCasual,
  AdidasAerobolt,
  CampusAgr,
  SparxSx0706g,
} from "./Pages/Product Pages/Featured/Product Elements/AllElements.jsx";
import {
  AsianWonder,
  SparxSynthetic,
  Centrino3392,
  AsianFuture01,
  BourgeLoirez1,
  AsianF04,
  AirJordan1,
  Blazer,
  AirForce1,
  Sneaker,
  Puma,
  Neeman,
  Dunk,
} from "./Pages/Product Pages/All Products/AllProducts.jsx";
import OrderPage from "./Pages/Order/OrderPage.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3Rv5QmSIB3N0Pbsc7TtbQiJivaOi00X9sIbazL"
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={[<Header />, <Home />, <Footer />]}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/payment"
        element={[
          <Header />,
          <Elements stripe={promise}>
            <Payment />
          </Elements>,
          <Footer />,
        ]}
      ></Route>
      <Route
        path="/checkout"
        element={[<Header />, <Checkout />, <Footer />]}
      ></Route>
      <Route
        path="/Orderpage"
        element={[<Header />, <OrderPage />, <Footer />]}
      ></Route>
      <Route
        path="/stussyy"
        element={[<Header />, <Stussyy />, <Footer />]}
      ></Route>
      <Route
        path="/campusterminator"
        element={[<Header />, <CampusTerminator />, <Footer />]}
      ></Route>
      <Route
        path="/SparxSxO661g"
        element={[<Header />, <SparxSxO661g />, <Footer />]}
      ></Route>
      <Route
        path="/SparxSx0414g"
        element={[<Header />, <SparxSx0414g />, <Footer />]}
      ></Route>
      <Route
        path="/RedTapeCasual"
        element={[<Header />, <RedTapeCasual />, <Footer />]}
      ></Route>
      <Route
        path="/SparxSx0706g"
        element={[<Header />, <SparxSx0706g />, <Footer />]}
      ></Route>
      <Route
        path="/AdidasAerobolt"
        element={[<Header />, <AdidasAerobolt />, <Footer />]}
      ></Route>
      <Route
        path="/CampusAgr"
        element={[<Header />, <CampusAgr />, <Footer />]}
      ></Route>
      <Route
        path="/AsianWonder"
        element={[<Header />, <AsianWonder />, <Footer />]}
      ></Route>
      <Route
        path="/SparxSynthetic"
        element={[<Header />, <SparxSynthetic />, <Footer />]}
      ></Route>
      <Route
        path="/Centrino3392"
        element={[<Header />, <Centrino3392 />, <Footer />]}
      ></Route>
      <Route
        path="/AsianFuture01"
        element={[<Header />, <AsianFuture01 />, <Footer />]}
      ></Route>
      <Route
        path="/BourgeLoirez1"
        element={[<Header />, <BourgeLoirez1 />, <Footer />]}
      ></Route>
      <Route
        path="/AsianF04"
        element={[<Header />, <AsianF04 />, <Footer />]}
      ></Route>
      <Route
        path="/AirJordan1"
        element={[<Header />, <AirJordan1 />, <Footer />]}
      ></Route>
      <Route
        path="/Blazer"
        element={[<Header />, <Blazer />, <Footer />]}
      ></Route>
      <Route
        path="/AirForce1"
        element={[<Header />, <AirForce1 />, <Footer />]}
      ></Route>
      <Route
        path="/Sneaker"
        element={[<Header />, <Sneaker />, <Footer />]}
      ></Route>
      <Route path="/Puma" element={[<Header />, <Puma />, <Footer />]}></Route>
      <Route
        path="/Neeman"
        element={[<Header />, <Neeman />, <Footer />]}
      ></Route>
      <Route path="/Dunk" element={[<Header />, <Dunk />, <Footer />]}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StateProvider>
  </React.StrictMode>
);
