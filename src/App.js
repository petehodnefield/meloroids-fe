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
  const client = new ApolloClient({
    uri: "https://meloroids-api.onrender.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header
          navSelected={navSelected}
          setNavSelected={setNavSelected}
        ></Header>
        <Routes>
          <Route
            path="/"
            element={
              <HomeScreen
                navSelected={navSelected}
                setNavSelected={setNavSelected}
              />
            }
          />
          <Route path="/train" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/learn" element={<ComingSoon />} />
          <Route path="/stats" element={<ComingSoon />} />

          <Route
            path="/train/artists/:artists/Freestyle"
            element={<Freestyle />}
          />
          <Route
            path="/train/artists/:artists/Interval"
            element={<Interval></Interval>}
          />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
