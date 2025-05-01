import { useLocation } from "react-router-dom"
import Message from "../layouts/Message";
import Container from "../layouts/Container";
import Loading from "../layouts/Loading";
import LinkButton from "../layouts/LinkButton";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";



function Projects() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoanding] = useState(false)
  const [projectMessage, setProjectsMessage] = useState('')

  const location = useLocation();
  const message = location?.state?.message;

  
    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
          }
        }).then(resp => resp.json()).then((data) => {
          setProjects(data)
          setRemoveLoanding(true)
        }).catch((err) => console.log(err))
      }, 1000)
    
      }, [])

      function removeProject(id) {
        setRemoveLoanding(false)
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type' : 'application/json'
          },
        }).then(resp => resp.json().then(() => {
          setProjects(projects.filter((project) => project.id !== id))
          setProjectsMessage('Projeto removido com sucesso!')
          setRemoveLoanding(true)
        })).catch(err => console.log(err))
      }
  return (

    <div className="px-8 w-full">

      <div className="w-full flex items-center justify-between mb-8">
        <h1 className=" font-bold text-[2em]">Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <Container customClass="justify-start">
        {projects.length > 0 && projects.map((project) => 
          <ProjectCard id={project.id} name={project.name}
          budget={project.budget} category={project.category.name} key={project.id} handleRemove={removeProject} />)}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
      </Container>
    </div>

  )
}

export default Projects