import React from "react";
import CreateBlogs from "./CreateBlogs";
import Registration from "./Registration";
import { Routes, Route } from "react-router-dom";
import Comment from "./Comment";
import EditPage from "./EditPage";
import CommentEdit from "./CommentEdit";
import AboutForm from "./AboutForm";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import CategoryBlogs from "./CategoryBlogs";
import UsersPosts from "./UsersPosts";
import AllBlogs from "./AllBlogs";
import BlogCard from "./BlogCard";
import { useLocation } from "react-router";

import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/createblogs" element={<CreateBlogs />} />
        <Route path="/createblogs/:id" element={<CreateBlogs />} />
        <Route path="/allBlogs" element={<AllBlogs />} />
        <Route path="/allblogs/:id" element={<AllBlogs />} />
        <Route path="/EditPage/:id" element={<EditPage />} />
        <Route path="/Comment/:id" element={<Comment />} />
        <Route path="/Comment/" element={<Comment />} />
        <Route path="/CommentEdit/:id" element={<CommentEdit />} />
        <Route path="/loginpage" element={<Registration />} />
        <Route path="/aboutform" element={<AboutForm />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/categoryblogs/:category" element={<CategoryBlogs />} />
        <Route path="/usersposts/:user_id" element={<UsersPosts />} />
        <Route path="/blogcard/:id" element={<BlogCard />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
