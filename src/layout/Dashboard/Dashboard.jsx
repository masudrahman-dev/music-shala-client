import React from "react";

import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";
import AddClass from "./InstrctorDashboard/AddClass";
const Dashboard = () => {
  return (
    <div>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        {/* Navbar */}

        <Navbar></Navbar>
        {/* <!-- Sidebar --> */}

        <Sidebar></Sidebar>
        {/* main  */}
        <main className="p-4 md:ml-64 h-auto pt-20">
          {/* <Table></Table> */}
          <AddClass></AddClass>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
