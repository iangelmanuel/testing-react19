import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeString = `
import { use } from 'react';
import ThemeContext from './ThemeContext'

function Heading({children}) {
  if (children == null) {
    return null;
  }

  // This would not work with useContext
  // because of the early return.
  const theme = use(ThemeContext);
  return (
    <h1 style={{color: theme.color}}>
      {children}
    </h1>
  );
}
`

export const UseExampleTwoExample = () => {
  return (
    <>
      <small>
        Código tomado de{' '}
        <a href="https://react.dev/blog/2024/04/25/react-19">React</a>
      </small>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {codeString}
      </SyntaxHighlighter>
    </>
  )
}
