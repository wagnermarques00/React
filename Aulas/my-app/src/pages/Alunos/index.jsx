import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import axios from "axios";

const Alunos = () => {
	const alunos = [
		{
			nome: "Yago",
			idade: 29,
			id: "1",
		},
		{
			nome: "Geraldo",
			idade: 70,
			id: "2",
		},
	];

	axios.get("https://randomuser.me/api/?results=5").then(({ data }) => {
		console.log(data.results);
	});

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" sx={{ background: "#ff5555" }}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							News
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<>
				<Container maxWidth="sm">
					<TableContainer component={Paper} sx={{ mt: 3 }}>
						<Table size="small" aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="right">Id</TableCell>
									<TableCell align="right">Nome</TableCell>
									<TableCell align="right">Idade</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{alunos.map((aluno) => (
									<TableRow
										key={aluno.id}
										sx={{
											"&:last-child td, &:last-child th":
												{
													border: 0,
												},
										}}
									>
										<TableCell align="right">
											{aluno.id}
										</TableCell>
										<TableCell align="right">
											{aluno.nome}
										</TableCell>
										<TableCell align="right">
											{aluno.idade}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Container>
			</>
		</>
	);
};

export default Alunos;
