import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import Games from "./Pages/Games.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/NotFound.jsx";
import GameDetails from "./Pages/GameDetails.jsx";

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
          <Route path="game/:id" element={<GameDetails />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
