import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeString = `
import { useOptimistic, useState } from 'react'
import { sleep } from '../utils/sleep'

export const UseOptimistic = () => {
  const [messageData, setMessageData] = useState([])
  const [optimisticMessage, setOptimisticMessage] = useOptimistic([])

  const onAction = async (formData) => {
    const message = formData.get('message')
    setOptimisticMessage([...optimisticMessage, message])
    await sleep(4000)
    setOptimisticMessage([])
    setMessageData([...messageData, message])
  }

  return (
    <>
      <article>
        <h4>Chat</h4>

        <section>
          <p>¡Hola!, ¿Cómo estas?</p>
        </section>

        <section>
          {/* Esta es la verdadera respusta */}
          <div>
            {messageData.length > 0
              ? messageData.map((msg, index) => (
                  <p key={index} style={{ color: 'white', fontSize: '20px' }}>
                    {msg} <span>✔️✔️</span>
                  </p>
                ))
              : null}
          </div>

          {/* Esto se ejecutaría como el mensaje optimista */}
          <div>
            {optimisticMessage.length > 0
              ? optimisticMessage.map((msg, index) => (
                  <p key={index} style={{ color: 'gray', fontSize: '20px' }}>
                    {msg} <span>✔️</span>
                  </p>
                ))
              : null}
          </div>
        </section>
      </article>

      <form action={onAction}>
        <input type="text" name="message" />
      </form>
    </>
  )
}

`

export const UseOptimisticExample = () => {
  return (
    <SyntaxHighlighter language="jsx" style={oneDark}>
      {codeString}
    </SyntaxHighlighter>
  )
}
