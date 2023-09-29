import React, { useState, useEffect, useContext } from "react";
import MonacoEditor from 'react-monaco-editor';

const Monaco: React.FC = () => {
  const [code, setCode] = useState("");
  return (
    <div>
      <MonacoEditor
        width="100%"
        height="75vh"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={setCode}
      /> 
    </div>
  );
};

export default Monaco;