// client/src/components/Sidebar.tsx
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "../css/components/Sidebar.module.css";
import HtmlEditor from "./HTMLEditor";

interface SidebarProps {
  isOpen: boolean;
  onHtmlChange: (data: string) => void;
}

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onHtmlChange }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Sidebar panel */}
          <motion.aside
            className={styles.sidebar}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <HtmlEditor onChange={(html) => onHtmlChange(html)} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
