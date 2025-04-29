import { Link } from "react-router-dom"

import { BsPencil, BsFillTrashFill } from "react-icons/bs"

function ProjectCard({id, name, budget, category, handleRemove}) {

    const categoryColors = {
        Infra: "bg-[#ffaebc]",
        Desenvolvimento: "bg-[#a0e7e5]",
        Design: "bg-[#b4f8c8]",
        Planejamento: "bg-[#fbe7c6]"
    }

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (


     
     <div className="p-[1em] border border-[#7a7a7a] rounded-[5px] w-[24%] m-[0.5%] ">
        <h4 className="bg-[#222] text-[#ffbb33] p-[0.4em] mb-[1.3em] text-[1.3em]">{name}</h4>
        <p className="text-[#7a7a7a] mb-[1em]">
            <span className="font-bold">Orcamento:</span> R${budget}
        </p>
        <p className="flex items-center">
            <span className={`block w-[12px] h-[12px] rounded-full mr-[5px] ${categoryColors[category] || 'bg-[#ccc]'}`}></span> {category}
        </p>
        <div className="mt-4 flex items-center gap-4">
            <Link to={`/project/${id}`} className="flex items-center text-[0.9em] py-[0.6em] px-[1em] border border-[#222] text-[#222] hover:bg-[#222] hover:text-[#ffbb33] houver:bg-[#222] transition duration-500 ">
            <BsPencil className="mr-2"/> Editar
            </Link>
            <button onClick={remove}className="flex items-center text-[0.9em] py-[0.6em] px-[1em] border border-[#222] text-[#222] hover:bg-[#222] hover:text-[#ffbb33] transition duration-500">
               <BsFillTrashFill className="mr-2"/> Excluir 
            </button>
        </div>
     </div>
    )
}

export default ProjectCard