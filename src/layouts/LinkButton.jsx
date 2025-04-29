import { Link } from "react-router-dom"

function LinkButton({ to, text}) {
    return (
        <Link className="bg-[#222] text-[#FFF]  py-[0.5em] px-[1em] transition duration-[0.5s] hover:text-[#ffbb33]" to={to}>
            {text}
        </Link>
    )
}

export default LinkButton