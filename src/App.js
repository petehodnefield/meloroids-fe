import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

// Component/Page imports
import Home from "./pages/Home";
import Interval from "./pages/Interval/Interval";
import Freestyle from "./pages/Freestyle/Freestyle";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ComingSoon from "./pages/ComingSoon";
import HomeScreen from "./pages/HomeScreen";

const App = () => {
  const [navSelected, setNavSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const client = new ApolloClient({
    uri: "https://meloroids-api.onrender.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navSelected={navSelected}
          setNavSelected={setNavSelected}
        ></Header>
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                setIsOpen={setIsOpen}
                navSelected={navSelected}
                setNavSelected={setNavSelected}
              />
            }
          />
          <Route path="/train" element={<Home setIsOpen={setIsOpen} />} />
          <Route path="/login" element={<Login setIsOpen={setIsOpen} />} />
          <Route path="/signup" element={<SignUp setIsOpen={setIsOpen} />} />
          <Route path="/learn" element={<ComingSoon />} />
          <Route path="/stats" element={<ComingSoon />} />

          <Route
            path="/train/artists/:artists/Freestyle"
            element={<Freestyle setIsOpen={setIsOpen} />}
          />
          <Route
            path="/train/artists/:artists/Interval"
            element={<Interval setIsOpen={setIsOpen}></Interval>}
          />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
