import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import Games from "./Pages/Games.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/notFound.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Games />} />
          <Route path="About" element={<About />} />
          <Route path="Games" element={<Games />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
