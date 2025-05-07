import { BsFillTrashFill } from "react-icons/bs"


function ServiceCard({ id, name, cost, description, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }
    return (
        <div className="p-[1em] border border-[#7a7a7a] rounded-[5px] w-[24%] m-[0.5%]  ">
            <h4 className="bg-[#222] text-[#ffbb33] p-[0.4em] mb-[1.3em] text-[1.3em]">
                {name}
            </h4>
            <p className="text-[#7a7a7a] mb-[0.5em]">
                <span className="font-bold">Custo total:</span> R${cost}
            </p>
            <p className="mb-[1em]">{description}</p>
            <div>
                <button onClick={remove} className="flex items-center text-[0.9em] py-[0.6em] px-[1em] border border-[#222] text-[#222] hover:bg-[#222] hover:text-[#ffbb33] transition duration-500">
                    <BsFillTrashFill className="mr-2"/>
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard