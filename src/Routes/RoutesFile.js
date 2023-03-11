import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import CreatePost from "../pages/CreatePost/CreatePost";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PostPage from "../pages/PostPage/PostPage";
import Register from "../pages/Register/Register";
import { UserContextProvider } from "../UserContext";

const RoutesFile = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/post/:id" element={<PostPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default RoutesFile;
