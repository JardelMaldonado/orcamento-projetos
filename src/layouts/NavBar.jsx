import { Link } from "react-router-dom"

import Container from "./Container"

import logo from '../assets/costs_logo.png'

function NavBar() {
    return (
        <nav className="flex justify-between bg-[#222] p-4">
            <Container>
                <Link to="/"><img src={logo} alt="Costs" /></Link>
                <ul className="flex list-none items-center">
                    <li className="text-white hover:text-[#ffbb33] mr-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-white hover:text-[#ffbb33] mr-4">
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className="text-white hover:text-[#ffbb33] mr-4">
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className="text-white hover:text-[#ffbb33] mr-4">
                        <Link to="/contact">Contato</Link>
                    </li>

                </ul>
            </Container>
        </nav>
    )
}

export default NavBar