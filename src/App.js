import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import "./App.css";
import Serverlogin from "./pages/signin/Serverlogin";
import Signin from "./pages/signin/Signin";
import Home from "./pages/home/Home";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/iocanix" element={<Home></Home>}></Route>
				<Route path="/iocanix/signin" element={<Signin></Signin>}></Route>
				<Route
					path="/iocanix/serverlogin"
					element={<Serverlogin></Serverlogin>}
				></Route>
			</Routes>
		</HashRouter>
	);
}

export default App;