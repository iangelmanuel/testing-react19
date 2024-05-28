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
      <article style={{ width: '100%' }}>
        <h4 style={{ color: 'yellow', textAlign: 'center' }}>Chat</h4>

        <section
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '20px' }}>¡Hola!, ¿Cómo estas?</p>
        </section>

        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {/* Esta es la verdadera respusta */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {messageData.length > 0
              ? messageData.map((msg, index) => (
                  <p key={index} style={{ color: 'white', fontSize: '20px' }}>
                    {msg} <span>✔️✔️</span>
                  </p>
                ))
              : null}
          </div>

          {/* Esto se ejecutaría como el mensaje optimista */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
