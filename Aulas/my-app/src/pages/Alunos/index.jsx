import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Lottie from "react-lottie";
import axios from "axios";
import carregandoAnimacao from "../../animations/loading.json";

const Alunos = () => {
	const [alunos, setAlunos] = useState([]);
	const [carregando, setCarregando] = useState(true);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: carregandoAnimacao,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	/** Caminho que o React segue por debaixo dos panos
	 * alunos -> undefined
	 *
	 * passa pelo axios :
	 * alunos 2 -> [{}]
	 * alunos3 -> {}
	 */

	/** CRUD com axios
	 * axios.post -> cadastrar/criar uma informação -> precisa de mais argumentos
	 * axios.get -> Pegar uma informação
	 * axios.put -> atualizar uma informação -> precisa de mais argumentos
	 * axios.delete -> deletar uma informação -> precisa de mais argumentos
	 */

	useEffect(() => {
		axios.get("https://randomuser.me/api/?results=5").then(({ data }) => {
			setAlunos(data.results);
		});
	}, []);

	/** Exemplo de try catch
	 * 	useEffect(() => {
	 * 		axios
	 * 			.get("https://randomuser.me/api/?results=3")
	 * 			.then(({ data }) => {
	 * 				alert("Deu certo");
	 * 			})
	 * 			.catch((error) => {
	 * 				if (error.status === 404) {
	 * 					setError(true);
	 * 				}
	 * 			});
	 * 	}, []);
	 */

	useEffect(() => {
		if (alunos.length > 0) {
			setTimeout(() => {
				setCarregando(false);
			}, 3000);
		}
	}, [alunos]);

	return (
		<>
			<>
				<Container maxWidth="sm">
					{carregando ? (
						<>
							<Lottie
								options={defaultOptions}
								height={300}
								width={300}
								speed={0.8}
							/>
						</>
					) : (
						<TableContainer component={Paper} sx={{ mt: 3 }}>
							<Table size="small" aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell align="right">Id</TableCell>
										<TableCell align="right">
											Nome
										</TableCell>
										<TableCell align="right">
											Idade
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{alunos.map((aluno) => (
										<TableRow
											key={aluno.id.value}
											sx={{
												"&:last-child td, &:last-child th":
													{
														border: 0,
													},
											}}
										>
											<TableCell align="right">
												{aluno.id.value}
											</TableCell>
											<TableCell align="right">
												{aluno.name.first}
											</TableCell>
											<TableCell align="right">
												{aluno.dob.age}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					)}
				</Container>
			</>
		</>
	);
};

export default Alunos;
