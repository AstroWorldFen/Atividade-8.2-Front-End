import { useState } from 'react';
import './IMCCalculator.css';

const IMCCalculator = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [relatorio, setRelatorio] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = parseFloat(altura);
    const pesoKg = parseFloat(peso);

    if (pesoKg > 0 && alturaMetros > 0) {
      const imcCalculado = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
      interpretarIMC(imcCalculado);
    } else {
      alert('Por favor, insira valores válidos para peso e altura.');
    }
  };

  const interpretarIMC = (imc) => {
    let mensagem = '';
    if (imc < 18.5) {
      mensagem = 'Abaixo do peso. Procure um médico!';
    } else if (imc >= 18.5 && imc < 24.9) {
      mensagem = 'Peso normal. Continue assim!';
    } else if (imc >= 25 && imc < 29.9) {
      mensagem = 'Sobrepeso. Cuidado com a saúde!';
    } else if (imc >= 30 && imc < 34.9) {
      mensagem = 'Obesidade Grau I. Acompanhe com um médico.';
    } else if (imc >= 35 && imc < 39.9) {
      mensagem = 'Obesidade Grau II. Intervenção médica recomendada.';
    } else {
      mensagem = 'Obesidade Grau III. Cuidados médicos urgentes.';
    }
    setRelatorio(mensagem);
  };

  return (
    <div className="imc-container">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC} className="imc-form">
        <div className="input-group">
          <label htmlFor="peso" className="visually-hidden">Peso</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Peso (kg)"
            step="0.1"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="altura" className="visually-hidden">Altura</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Altura (m)"
            step="0.01"
            required
          />
        </div>
        <button type="submit" className="calcular-btn">Calcular IMC</button>
      </form>
      {imc && (
        <div className="resultado">
          <p><strong>Seu IMC:</strong> {imc}</p>
          <p><strong>Interpretação:</strong> {relatorio}</p>
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;
