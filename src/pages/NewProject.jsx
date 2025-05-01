import { useNavigate } from 'react-router-dom'

import ProjectForm from '../components/ProjectForm';

function NewProject() {

  const navigate = useNavigate()

  function createPost(project) {

    //initialize cost and services
    project.cost = 0
    project.services = []
    
    fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(project),
    }).then((resp) => resp.json()).then((data) => {
        console.log(data)
        navigate("/projects", {
            state: { message: "Projeto criado com sucesso!" },
          });          
    }).catch((err) => console.log(err))
  }

    return (
        <div className="w-[450px] m-auto  border border-[#ccc] p-10 rounded-lg  " >
            <h1 className=" font-bold text-[2em]">Criar Projeto</h1>
            <p className="text-[#7b7b7b] ">Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject