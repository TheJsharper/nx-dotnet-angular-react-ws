import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import code from "../code";
import { Link } from "react-router-dom";

export function Form() {
  const [language,/* changeLanguage*/] = useState("tsx");
  const [languageDemo, /* changeDemo*/] = useState(code["tsx"]);
  const [lineNumbers,/* toggleLineNumbers*/] = useState(true);
  return (

    <div className="d-flex flex-column">
      <h1>Form</h1>

      <div className="demo">
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={dracula}
          codeBlock
        />
      </div>
      <div >
        <Link to="../" >Back to Home</Link>
      </div>
    </div>
  );
}
