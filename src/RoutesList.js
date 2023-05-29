import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RoutesList() {
  return (
    <Routes>
      <Route element={<DogList />} path="/dogs" />
      <Route element={<DogDetails />} path="/dogs/:name" />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;