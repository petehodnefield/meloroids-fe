import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/styles.css";
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

const client = new ApolloClient({
  uri: "https://meloroids-api.onrender.com/graphql",
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      query Songs {
        songs {
          _id
          artist_name
          key
          song_name
          progression
        }
      }
    `,
  })
  .then((result) => {
    console.log(result);
    console.log(console.error());
  })
  .catch((err) => console.log("hi", err));
document.title = "Meloroids";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
