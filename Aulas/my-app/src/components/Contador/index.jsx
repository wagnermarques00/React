import { useState } from "react";
import { Container } from "../../Styles";
import { Botao, BotaoZerar, MensagemErro, Titulo } from "./Styles";

const Contador = () => {
	const [numero, setNumero] = useState(0);
	const [erro, setErro] = useState(false);

	const aumentarAteDez = () => {
		if (numero >= 10) {
			setErro(true);
			return;
		} else {
			setNumero(numero + 1);
		}
	};

	const zerarContagem = () => {
		setNumero(0);
		setErro(false);
	};

	return (
		<Container>
			<Titulo>Contador</Titulo>
			{/* PROP: Parâmetros dos componentes React */}
			{erro && <MensagemErro>Não é possível acrescentar</MensagemErro>}
			<Botao onClick={() => aumentarAteDez()}>Aumentar</Botao>
			<BotaoZerar
				onClick={() => zerarContagem()}
				variant="contained"
				disabled={numero === 0}
			>
				Zerar
			</BotaoZerar>
			<Texto valor={numero} />
		</Container>
	);
};

//Prop
const Texto = ({ valor }) => {
	return <span>{valor}</span>;
};

export default Contador;
