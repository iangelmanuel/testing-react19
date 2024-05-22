import { useActionState, useState } from 'react'

export const UseActionState = () => {
  const [data, setData] = useState({})

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const pokemon = formData.get('pokemon')

      const getPokemonData = await fetch(
        'https://pokeapi.co/api/v2/pokemon/' + pokemon
      )
      const data = await getPokemonData.json()
      setData(data)
    }
  )

  const checkStatusForm = isPending ? 'Buscano...' : 'Buscar'
  return (
    <>
      <div>
        {error && <p>{error}</p>}

        <h3 style={{ textAlign: 'center', margin: 0 }}>
          {isPending ? 'Buscando Pokemon' : data.name}
        </h3>

        {data.sprites && (
          <img
            src={data.sprites.front_default}
            alt={data.name}
            style={{ width: 200, margin: '0, auto' }}
          />
        )}
      </div>

      <form noValidate action={submitAction}>
        <label>
          Nombre del Pokemon:
          <input type="text" placeholder="Ej. pikachu" name="pokemon" />
        </label>

        <button disabled={isPending}>{checkStatusForm}</button>
      </form>
    </>
  )
}