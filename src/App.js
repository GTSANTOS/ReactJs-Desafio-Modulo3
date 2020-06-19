import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Card from './components/Card';

export default function App() {

  const [valor, setValor] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [periodo, setPeriodo] = useState(1);

  const [array, setArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [taxaMinValue] = useState(-12);
  const [taxaMaxValue ] = useState(12);
  const [periodoMinValue] = useState(1);
  const [periodoMaxValue]  = useState(36);

  useEffect(() => {
    
    let arrayParcelas = [];
    let montante = 0;  
    setErrorMessage('');

    if (taxa < taxaMinValue || taxa > taxaMaxValue) {
      setErrorMessage(
        `A taxa de juros deve ser entre ${taxaMinValue} e ${taxaMaxValue}`
      );
      setArray(arrayParcelas);
      return;
    }

    if (periodo < periodoMinValue || periodo > periodoMaxValue) {
      setErrorMessage(
        `O período deve ser entre ${periodoMinValue} e ${periodoMaxValue}`
      );
      setArray(arrayParcelas);
      return;
    }

    for (let index = 1; index <= periodo; index++) {
      montante = valor * Math.pow((1 + (taxa/100)), index);
      arrayParcelas.push({
        parcela: index,
        valorFinal: montante.toFixed(2),
        valorJuros: (montante - valor).toFixed(2),
        porcentagem: (((montante - valor) / valor) * 100).toFixed(2),
        juros: taxa
      });   
    }
    setArray(arrayParcelas);
  }, [valor, taxa, periodo ])

  const handleValor = (valor) => {
    setValor(valor)
  };

  const handleTaxa = (taxa) => {
    setTaxa(taxa)
  };

  const handlePeriodo = (periodo) => {
    setPeriodo(periodo)
  };

  return (
    <div>
        <h3 className="center">React - Juros Compostos</h3>
        <div >
        <form className="col s12 container">
          <div className="row">
            <Input value={valor} min={0} max={9999999999} descricao={"Montante Inicial:"} onChange={handleValor} />
            <Input value={taxa} min={taxaMinValue} max={taxaMaxValue} descricao={"Taxa de juros mensal:"} onChange={handleTaxa} />
            <Input value={periodo} min={periodoMinValue} max={periodoMaxValue} descricao={"Período (meses):"} onChange={handlePeriodo} />
          </div>
        </form>
        <div style={styles.errorMessage}>{errorMessage}</div>
        <div className="flex-row borderCard" >
        {  valor > 0 ? array.map((dados, i) => {                     
           return (<Card key={i} dados={dados}/>) 
        }) : ''}
        </div>
      </div>
    </div>
  )
}

const styles = {
  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center'
  },
};
