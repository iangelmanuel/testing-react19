import { version } from 'react'
import { Seo } from './components/Seo'
import { UseTransitions } from './components/UseTransitions'
import { UseActionState } from './components/UseActionState'
import { UseFormStatus } from './components/UseFormStatus'

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
          padding: 20,
          margin: 'auto',
          marginBottom: 50,
          backgroundColor: '#222',
        }}
      >
        <h1 style={{ textAlign: 'center', margin: 0, color: 'yellow' }}>
          Bienvenido a React 19 🚀
        </h1>

        <p>
          Aquí encontraras algunas demos de las nuevas implementaciónes de React
          en la versión 19
        </p>

        <small style={{ color: 'gray' }}>Version: {version}</small>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          maxWidth: 800,
          margin: 'auto',
          marginBottom: '10rem',
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
          padding: 20,
          maxWidth: 800,
          margin: 'auto',
          marginBottom: '10rem',
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          maxWidth: 800,
          margin: 'auto',
          marginBottom: '10rem',
        }}
      >
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de useActionStatus</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center' }}>
          El useActionStatus se utiliza para el manejo de estados de carga de un
          formulario, siendo el formulario el componente padre y todos los
          componentes hijos del formulario (como los inputs) a nivel de
          componente pueden escuchar por este Hook el estado de carga del
          formulario. (mirar el componente UseFormStatus.jsx)
        </p>
        <UseFormStatus />
      </div>
    </>
  )
}
