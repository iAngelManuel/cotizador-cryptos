import styled from '@emotion/styled'

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Lato' sans-serif;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Precio = styled.span`
  font-size: 24px;
  span {
    color: #c5c5c5;
    font-weight: 700;
  }
`

const Texto = styled.p`
  font-size: 16px;
  span {
    color: #c5c5c5;
    font-weight: 700;
  }
`

export default function Resultado({ resultado }) {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = resultado

  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt={`Imagen de ${IMAGEURL}`}
      />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio mas bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación ultimas 24h: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}
