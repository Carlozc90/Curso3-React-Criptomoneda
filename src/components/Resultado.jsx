import styled from "@emotion/styled";

const ResultadoHT = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 2;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
  margin-right: 20px;
`;

const TextoHT = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const PrecioHT = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <ResultadoHT>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen" />
      <div>
        <PrecioHT>
          El Precio es de: <span>{PRICE}</span>
        </PrecioHT>
        <TextoHT>
          El Precio mas Alto del Dia: <span>{HIGHDAY}</span>
        </TextoHT>
        <TextoHT>
          El Precio mas Bajo del Dia: <span>{LOWDAY}</span>
        </TextoHT>
        <TextoHT>
          Cambio en las ultimas 24H: <span>{CHANGEPCT24HOUR}</span>
        </TextoHT>
        <TextoHT>
          La ultima update: <span>{LASTUPDATE}</span>
        </TextoHT>
      </div>
    </ResultadoHT>
  );
};

export default Resultado;
