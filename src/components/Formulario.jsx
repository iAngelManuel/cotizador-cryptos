import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmt = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

export default function Formulario({ setMonedas }) {

  const [ criptos, setCriptos ] = useState([])
  const [ error, setError ] = useState(false)

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
  const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

  useEffect(() => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

    const consultarApi = async () => {

      const response = await fetch(url)
      const result = await response.json()

      const arrayCriptos = result.Data.map(cripto => {
        const obj = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return obj
      })

      setCriptos(arrayCriptos)
    }

    consultarApi()
  }, [])


  const handleSubmit = e => {
    e.preventDefault()
    
    if ([moneda, criptomoneda].includes('')) {
      return setError(true)
    }

    setError(false)
    setMonedas({moneda, criptomoneda})
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmt
          type="submit"
          value="Cotizar"
        />
      </form>
    </>
  )
}
