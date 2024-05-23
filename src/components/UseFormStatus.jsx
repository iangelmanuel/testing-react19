import { useFormStatus } from 'react-dom'
import { useState } from 'react'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const UseFormStatus = () => {
  const [data, setData] = useState('')

  const onAction = async (formData) => {
    setData('')

    const name = formData.get('name')
    if (!name) return alert('El nombre es requerido')

    await sleep(2000)
    setData(name)
  }

  return (
    <>
      {data && <h3 style={{ color: 'yellow', margin: 0 }}>{data}</h3>}
      <form noValidate action={onAction}>
        <Inputs data={data} setData={setData} />
      </form>
    </>
  )
}

const Inputs = () => {
  const { pending } = useFormStatus()
  const isPending = pending ? 'Cargando...' : 'Enviar'
  return (
    <>
      <label>
        Nombre:
        <input type="text" placeholder="Ej. Angel De La Torre" name="name" />
      </label>

      <button disabled={pending}>{isPending}</button>
      <small style={{ padding: '1rem', color: 'gray' }}>
        Pequeño simulador para almacenar el nombre de manera asincrona
      </small>
    </>
  )
}
