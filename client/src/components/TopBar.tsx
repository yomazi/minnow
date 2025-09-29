// client/src/components/TopBar.tsx
import { Menu } from "lucide-react";
import React from "react";

import styles from "../css/components/TopBar.module.css";

interface TopBarProps {
  onMenuClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  return (
    <header className={styles.topBar}>
      <button className="hamburger" onClick={onMenuClick}>
        <Menu size={22} />
      </button>
      <h1>Minnow</h1>
      <div className={styles.lastItem}>
        <img src="/logo.png" />
      </div>
    </header>
  );
};

export default TopBar;
