const CodeComponent = require('react-markdown/src/ast-to-react').CodeComponent;
const { Prism: SyntaxHighlighter } = require('react-syntax-highlighter');
const { dark } = require('react-syntax-highlighter/dist/cjs/styles/prism');


const CodeBlock = ({ inline, className, children }) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }
  const match = /language-(\w+)/.exec(className || '');
  const lang = match && match[1] ? match[1] : '';
  return (
    <SyntaxHighlighter
      style={dark}
      language={lang}
      children={String(children).replace(/\n$/, '')}
    />
  );
};

module.exports = CodeBlock;
