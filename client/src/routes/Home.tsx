import React, { useState } from "react";
import Main from "../components/Main";
import TopBar from "../components/TopBar";

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Main isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Home;
