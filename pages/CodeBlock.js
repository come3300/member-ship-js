// pages/codeHighlight.js

import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';//ここに登録したい言語のソースを登録する
import php from 'highlight.js/lib/languages/php';
import 'highlight.js/styles/vs2015.css'; 
// import 'highlight.js/styles/github-dark-dimmed.css'; 
//背景が黒くなる


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php',php);

const CodeHighlight = ({ code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: code }} />
    </pre>
  );
};

export default CodeHighlight;


