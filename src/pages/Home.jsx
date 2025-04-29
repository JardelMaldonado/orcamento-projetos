import savings from '../assets/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home() {
    return (
        <section className="w-full flex flex-col items-center justify-center p-[4em]">
            <h1 className=" font-bold text-[2.5em] mb-[0.5em]">Bem-Vindo ao <span className="font-bold text-[#ffbb33] p-[.5em] bg-[#222]">Costs</span></h1>
            <p className="mb-[1.5em] text-[#7b7b7b] p-[1.5em]">Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt="Costs" className="w-[350px] my-[2em]" />
        </section>
    )
}

export default Home