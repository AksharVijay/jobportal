import Job from "@/pages/Job";
import JobListing from "@/pages/JobListing";
import LandingPage from "@/pages/LandingPage";
import MyJobs from "@/pages/MyJobs";
import OnBoarding from "@/pages/OnBoarding";
import PostJob from "@/pages/PostJob";
import SavedJob from "@/pages/SavedJob";
import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Header from "@/components/Header";

const AppLayout = () => {
  return (
    <div>
      <div className={styles.gridBackground}></div>
      <main className="min-h-screen px-4 max-w-7xl mx-auto">
        <Header/>
        <div>
          <Routes>
            <Route path="/job/:id" element={<Job />}></Route>
            <Route path="/job-listing" element={<JobListing />}></Route>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/my-jobs" element={<MyJobs />}></Route>
            <Route path="/on-boarding" element={<OnBoarding />}></Route>
            <Route path="/post-job" element={<PostJob />}></Route>
            <Route path="/saved-job" element={<SavedJob />}></Route>
          </Routes>
        </div>
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">Made by Akshar Vijay</div>
    </div>
  );
};

export default AppLayout;
