import path from 'path';
import fs from 'fs';
import React from 'react'; // React ライブラリをインポート
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock'; // CodeBlock コンポーネントのインポート

function App({ markdown }) {
  return React.createElement(ReactMarkdown, {
    children: markdown,
    components: {
      code: CodeBlock,
    },
  });
}

export default App;

export const getStaticProps = async () => {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), 'pages/test.md'),
    'utf8',
  );
  return {
    props: { markdown },
  };
};
