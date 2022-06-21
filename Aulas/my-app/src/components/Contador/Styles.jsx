import styled from "styled-components";
import { Button } from "@mui/material";

export const Titulo = styled.h3`
	font-size: 20px;
	font-family: sans-serif;
	/* color: violet; */
`;

export const Botao = styled.button`
	background-color: #4e034e;
	color: #fff;
	border: 1px solid #ae66ae;
	padding: 7px;
	margin-right: 10px;
	border-radius: 5px;
	&:hover {
		background-color: #780778;
	}
`;

export const MensagemErro = styled.p`
	color: red;
`;

export const BotaoZerar = styled(Button)`
	/**	Fazer da forma abaixo para sempre acatar as edições
	 *	Serve tanto pro Material quanto pro Bootstrap
	 */
	&& {
		width: 73px;
		height: 31px;
		margin-right: 10px;
	}
`;
