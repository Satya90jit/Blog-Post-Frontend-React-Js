import React from "react";
import DemoPosts from "./DemoPosts";
import BannerCard from "./BannerCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CategoryPage from "./CategoryPage";
import RecentPost from "./RecentPosts";
import ScrollBtn from "./ScrollBtn";
import { motion } from "framer-motion";
import Whatsapp from "./Whatsapp";

function HomePage() {

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <ScrollBtn />
        <BannerCard />        
        <Whatsapp/>
        <CategoryPage />
        <br />
        <RecentPost />
        <br />
        <DemoPosts />
        <br />
        <Footer />
      </motion.div>
    </>
  );
}
export default HomePage;
