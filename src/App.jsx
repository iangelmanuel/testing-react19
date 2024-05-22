import { version } from 'react'
import { Seo } from './components/Seo'
import { UseTransitions } from './components/UseTransitions'
import { UseActionState } from './components/UseActionState'

export default function App() {
  return (
    <>
      <Seo title={'Bienvenido a React'} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          padding: 20,
          maxWidth: 1200,
          margin: 'auto',
          marginBottom: 50,
        }}
      >
        <h1 style={{ textAlign: 'center', margin: 0 }}>
          ¡Hola! Estás usando React versión 19.
        </h1>

        <small style={{ color: 'red' }}>{version}</small>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          padding: 20,
          maxWidth: 800,
          margin: 'auto',
          marginBottom: 80,
        }}
      >
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de useTransitions</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center', margin: 0 }}>
          El useTransitions se encarga de manejar funciones asincronas con un
          loading para informarle al usuario de la carga asincrona de una
          petición
        </p>
        <UseTransitions />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          padding: 20,
          maxWidth: 800,
          margin: 'auto',
          marginBottom: 80,
        }}
      >
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de useActionState</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center' }}>
          El useActionState se encarga de manejar todo el estado del formulario,
          es decir, el estado de los inputs, el estado de los errores y el
          estado de los mensajes de éxito, esto para evitar utilizar otras
          librerias como Formik o React Hook Form
        </p>
        <UseActionState />
      </div>
    </>
  )
}
