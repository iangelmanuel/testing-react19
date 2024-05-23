import { version } from 'react'
import { Seo } from './components/Seo'

import { UseTransitionExample } from './components/examples/UseTransitionExample'
import { UseTransitions } from './components/UseTransitions'

import { UseActionStateExample } from './components/examples/UseActionStateExample'
import { UseActionState } from './components/UseActionState'

import { UseFormStatusExample } from './components/examples/UseFormStatusExample'
import { UseFormStatus } from './components/UseFormStatus'

import { UseExample } from './components/examples/UseExamples'
import { UseExampleTwoExample } from './components/examples/UseExampleTwoExample'

// import { Use } from './components/Use'
import { Github } from './svg/Github'
import { React } from './svg/React'

export default function App() {
  return (
    <>
      <Seo title={'Bienvenido a React'} />

      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          margin: 'auto',
          marginBottom: '5rem',
        }}
      >
        <div style={{ color: 'cyan' }}>
          <React />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            margin: 'auto',
            marginBottom: 50,
          }}
        >
          <h1 style={{ textAlign: 'center', margin: 0, color: 'yellow' }}>
            Bienvenido a React 19 🚀
          </h1>
          <p>
            Aquí encontraras algunas demos de las nuevas implementaciónes de
            React en la versión 19
          </p>
          <small style={{ color: 'gray' }}>Version: {version}</small>
        </div>

        <div
          className="scale"
          style={{ padding: 0, margin: 0, height: 'auto' }}
        >
          <a
            href="https://github.com/iAngelManuel/testing-react19"
            rel="noreferrer"
            target="_blank"
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}
          >
            <Github />
            <small>iAngelManuel</small>
          </a>
        </div>
      </header>

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
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de useTransitions()</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center', margin: 0 }}>
          El useTransitions se encarga de manejar funciones asincronas con un
          loading para informarle al usuario de la carga asincrona de una
          petición.{' '}
          <a
            href="https://github.com/iAngelManuel/testing-react19/blob/main/src/components/UseTransitions.jsx"
            target="_blank"
            rel="noreferrer"
          >
            UseTransitions.jsx
          </a>{' '}
          para ver el código
        </p>
        <UseTransitionExample />
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
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de useActionState()</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center' }}>
          El useActionState se encarga de manejar todo el estado del formulario,
          es decir, el estado de los inputs, el estado de los errores y el
          estado de los mensajes de éxito, esto para evitar utilizar otras
          librerias como Formik o React Hook Form.{' '}
          <a
            href="https://github.com/iAngelManuel/testing-react19/blob/main/src/components/UseFormStatus.jsx"
            target="_blank"
            rel="noreferrer"
          >
            UseActionState.jsx
          </a>{' '}
          para ver el código
        </p>
        <UseActionStateExample />
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
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de useActionStatus()</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center' }}>
          El useActionStatus se utiliza para el manejo de estados de carga de un
          formulario, siendo el formulario el componente padre y todos los
          componentes hijos del formulario (como los inputs) a nivel de
          componente pueden escuchar por este Hook el estado de carga del
          formulario.{' '}
          <a
            href="https://github.com/iAngelManuel/testing-react19/blob/main/src/components/UseFormStatus.jsx"
            target="_blank"
            rel="noreferrer"
          >
            UseFormStatus.jsx
          </a>{' '}
          para ver el código
        </p>
        <UseFormStatusExample />
        <UseFormStatus />
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
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de use()</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center' }}>
          La nueva API de React llamada{' '}
          <strong style={{ color: 'white' }}>use</strong> se utiliza para
          manejar la carga de un componente de manera asincrona, es decir, el
          componente se monta de manera asincrona utilizando dentro la API nueva
          de react{' '}
          <strong style={{ color: 'white' }}>use(Función Asíncrona)</strong>,
          luego debemos envolver nuestro componente asíncrono con el componente{' '}
          <strong style={{ color: 'white' }}>{'<Suspense />'}</strong> para
          manejar la carga de manera correcta con su respectivo{' '}
          <strong>fallback</strong> como atributo del Suspense.{' '}
          <a
            href="https://github.com/iAngelManuel/testing-react19/blob/main/src/components/UseFormStatus.jsx"
            target="_blank"
            rel="noreferrer"
          >
            Use.jsx
          </a>{' '}
          para ver el código
        </p>
        {/* <Use /> */}
        <UseExample />
        <UseExampleTwoExample />
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
        <h2 style={{ color: 'purple', margin: 0 }}>Uso de useOptimistic()</h2>
        <h4 style={{ margin: 0 }}>Explicación:</h4>
        <p style={{ color: 'gray', textAlign: 'center' }}>
          La nueva API de React llamada{' '}
          <strong style={{ color: 'white' }}>use</strong> se utiliza para
          manejar la carga de un componente de manera asincrona, es decir, el
          componente se monta de manera asincrona utilizando dentro la API nueva
          de react{' '}
          <strong style={{ color: 'white' }}>use(Función Asíncrona)</strong>,
          luego debemos envolver nuestro componente asíncrono con el componente{' '}
          <strong style={{ color: 'white' }}>{'<Suspense />'}</strong> para
          manejar la carga de manera correcta con su respectivo{' '}
          <strong>fallback</strong> como atributo del Suspense.{' '}
          <a
            href="https://github.com/iAngelManuel/testing-react19/blob/main/src/components/UseFormStatus.jsx"
            target="_blank"
            rel="noreferrer"
          >
            useOptimistic.jsx
          </a>{' '}
          para ver el código
        </p>
        {/* <Use /> */}
        <UseExample />
      </div>
    </>
  )
}
