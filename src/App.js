import "./App.css";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";
import Header from "./components/header/Header";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
