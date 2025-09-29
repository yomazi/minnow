// client/src/components/HtmlEditor.tsx
import { html } from "@codemirror/lang-html";
import { githubDark } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";

import styles from "../css/components/HtmlEditor.module.css";

interface HtmlEditorProps {
  onChange?: (data: string) => void;
}

const HtmlEditor: React.FC<HtmlEditorProps> = ({ onChange }) => {
  const value = "<p>I'm a damn paragraph.</p>";

  return (
    <div>
      <CodeMirror
        className={styles.codeMirror}
        theme={githubDark}
        value={value}
        height="60vh"
        width="100%"
        basicSetup={{
          lineNumbers: false,
        }}
        extensions={[html()]}
        onChange={onChange}
      />
    </div>
  );
};

export default HtmlEditor;
