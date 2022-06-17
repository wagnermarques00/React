import "./styles.css";
import { Routes, Route } from "react-router-dom";
import ArmazemSerratec from "./pages/ArmazemSerratec";
import Alunos from "./pages/Alunos";
import CadastroMaterias from "./pages/CadastroMaterias/index.jsx";
import ListagemMaterias from "./pages/ListagemMaterias/index.jsx";
import Navbar from "./components/Navbar";
import { TemaContext } from "./context/";
import { useContext } from "react";

function App() {
	const { temaSelecionado } = useContext(TemaContext);
	const tema = {
		claro: {
			backgroundColor: "#fff",
		},
		escuro: {
			backgroundColor: "#44475a",
			color: "#f8f8f2",
		},
	};

	return (
		<div className="container" style={tema[temaSelecionado]}>
			<Navbar />
			<Routes>
				<Route path="/" element={<ArmazemSerratec />} />
				<Route path="/alunos" element={<Alunos />} />
				<Route path="materias">
					<Route path="cadastro" element={<CadastroMaterias />} />
					<Route path="listagem" element={<ListagemMaterias />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

//Rotas -> https://www.robinwieruch.de/react-router-nested-routes/

/**Exemplo de rota encapsulada:
 * function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<ArmazemSerratec />} />
				<Route path="/alunos" element={<Alunos />} />
				<Route path="materias" element={<Materias />}>
					<Route path="/cadastro" element={<CadastroMaterias />} />
					<Route path="/listagem" element={<ListagemMaterias />} />
				</Route>
			</Routes>
		</div>
	);
}
 */
