import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeString = `
import { use } from 'react';

function Comments({commentsPromise}) {
  // el use() se suspenderá hasta que se resuelva la promesa
  // de la funcion commentsPromise.
  const comments = use(commentsPromise);
  return comments.map(comment => <p key={comment.id}>{comment}</p>);
}

function Page({commentsPromise}) {
  // Cuando el use() suspende el componente de Comentarios,
  // se mostrará este fallback del Suspense.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  )
}
`

export const UseExample = () => {
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
