import React from "react";
import NavBar from "./NavBar";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./HomePage";
import ErrorPage from "./ErrorPage";
import Users from "./Users";
import Calculator from "./Calculator";
import ErrorBoundary from "./ErrorBoundary";
import Projects from "./Projects";
import TechUsed from './TechUsed'
import Page from "../Page";
import Review from "./Review";
import ErrorBoundaryPage from "./ErrorBoundaryPage";
import AddComment from './AddComment'

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <main className="container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="review" element={<Review />} />
              <Route path="technologyused" element={<TechUsed/>} />
            </Route>
            <Route path="/users" element={<Users />} />
            <Route path="/projects" element={<Projects />}>
              <Route path="calculator" element={<Calculator />} />
              <Route path="review" element={<Review/>} />
              <Route path="addcomment" element={<AddComment/>} />
            </Route>
          

            <Route path="errorboundarypage" element={<ErrorBoundaryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </ErrorBoundary>
    
    </div>
  );
}
