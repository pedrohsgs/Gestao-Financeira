import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Gerenciamento } from "./pages/gerenciamento";
import { Financas } from "./pages/financas";
import { Login } from "./pages/login";
import { Criar } from "./pages/criar";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gerenciamento" element={<Gerenciamento />} />
                <Route path="/financas" element={<Financas />} />
                <Route path="/login" element={<Login />} />
                <Route path="/criar" element={<Criar />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
