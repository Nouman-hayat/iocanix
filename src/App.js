import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Serverlogin from "./pages/signin/Serverlogin";
import Signin from "./pages/signin/Signin";




function App() {
  return (
    <BrowserRouter>
			<Routes>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/serverlogin" element={<Serverlogin></Serverlogin>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
