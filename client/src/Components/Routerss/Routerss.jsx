import React, { useEffect, useState } from "react";

import LandingPage from "../LandingPage/LandingPage";
import Category from "../CategoryOfProducts/Category";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CartPage from "../CartPage/CartPage";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import ConatctDetails from "../ConatctDetails/ConatctDetails";
import PaymentPage from "../PaymentPage/PaymentPage";


export default function Routerss() {

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Category />
              <TrendingProducts />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


        <Route path="/cart" element={<CartPage />} />

        <Route
          path="/women-kurtas-suits/:id"
          element={<ProductDescriptionPage />}
        />

        <Route path="/women-tops/:id" element={<ProductDescriptionPage />} />

        <Route path="/men-jeans/:id" element={<ProductDescriptionPage />} />

        <Route path="/men-t-shirts/:id" element={<ProductDescriptionPage />} />

        <Route path="/baby-wears/:id" element={<ProductDescriptionPage />} />

        <Route path="/category/:id/products" element={<CategoryPage />} />

        <Route path="/contact" element={<ConatctDetails />} />

        <Route path="/payment" element={<PaymentPage />} />

      </Routes>

    </div>
  );
}
