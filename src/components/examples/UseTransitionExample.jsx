import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeString = `
import { useState, useTransition } from 'react'

const getFetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await response.json()
  return data
}

export const UseTransitions = () => {
  const [data, setData] = useState([])
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      const data = await getFetchData()

      setData(data)
    })
  }

  const checkLabel = isPending ? 'Cargando...' : 'Extraer datos'

  return (
    <>
      <h5>{checkLabel}</h5>
      {data.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
      <button onClick={handleClick} disabled={isPending}>
        Extraer datos
      </button>
    </>
  )
}
`

export const UseTransitionExample = () => {
  return (
    <SyntaxHighlighter language="jsx" style={oneDark}>
      {codeString}
    </SyntaxHighlighter>
  )
}
