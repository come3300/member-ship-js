// pages/index.js

import React from 'react';
import CodeHighlight from './CodeBlock.js';

const Home = () => {
  const codeSnippet = `
    // JavaScriptコードのサンプル

    // メッセージを表示する関数
    function showMessage() {
      console.log("Hello, World!");
    }

    // 関数を呼び出す
    showMessage();
  `;

  return (
    <div>
      <h1>コードハイライトの例</h1>
      <CodeHighlight code={codeSnippet} />
    </div>
  );
};

export default Home;
