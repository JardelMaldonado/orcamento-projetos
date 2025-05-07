import { v4 as uuidv4 } from "uuid"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import ProjectForm from "../components/ProjectForm"
import Message from '../layouts/Message'
import ServiceForm from "../service/ServiceForm"
import ServiceCard from "../service/ServiceCard"

function Project() {
  const { id } = useParams()

  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [message, setMessage] = useState()
  const [type, setType] = useState()
  const [showServiceForm, setShowServiceForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((resp) => resp.json()).then((data) => {
        setProject(data)
        setServices(data.services)
      }).catch((err) => console.log(err))
    }, 500)


  }, [id])

  function editPost(project) {
    setMessage('')

    if (project.budget < project.cost) {
      setMessage('O orçamento não pode ser menor que o custo do projeto!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    }).then(resp => resp.json()).then((data) => {

      setProject(data)
      setShowProjectForm(false)
      setMessage('Projeto atualizado!')
      setType('success')

    }).catch(err => console.log(err))
  }

  function createService(project) {
    setMessage('')

        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
        
        // maximum value validation
        if(newCost > parseFloat(project.budget)) {
          setMessage( 'Orçamento ultrapassado, verifique o valor do serviço')
          setType('error')
          project.services.pop()
          return false
        }
        
        // sdd services cost to ptoject total cost
        project.cost = newCost

        //update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        }).then((resp) => resp.json()).then(() => {
          setShowServiceForm(false)
        }).catch((err) => console.log(err))
  }

  function removeService(id, cost) {
       
    const servicesUpdated = project.services.filter((service) => service.id !== id)

    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
           body: JSON.stringify(projectUpdated)
    }).then((resp) => resp.json()).then(() => {
      setProject(projectUpdated)
      setServices(servicesUpdated)
      setMessage('Serviço removido com sucesso!')
    }).catch((err) => console.log(err))
  }

  function toggleProjectForm() {

    setShowProjectForm(!showProjectForm)

  }

  function toggleServiceForm() {

    setShowServiceForm(!showProjectForm)

  }

  return (
    <>
      {project.name ? (
        <div className="p-4 w-full">
          <Container className="flex flex-col w-full" >
            {message && <Message type={type} msg={message} />}
            <div className="w-full border-b border-[#7a7a7a] mb-[1.2em] pb-[1.2em]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-[#ffbb33] bg-[#222] mb-3 p-4">Projeto: {project.name}</h1>
                <button className="bg-[#222] text-[#FFF]  py-[0.5em] px-[0.5em] transition duration-[0.5s] hover:text-[#ffbb33] border-none max-h-40 cursor-pointer" onClick={toggleProjectForm} >
                  {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                </button>
              </div>
              {!showProjectForm ? (
                <div className="w-100 mt-4 space-y-1" >
                  <p className="font-bold">Categoria: <span className="font-normal" >{project.category.name}</span></p>
                  <p className="font-bold">Total de Orçamento: <span className="font-normal"> R${project.budget}</span></p>
                  <p className="font-bold">Total de Utilizado: <span className="font-normal" > R${project.cost}</span></p>
                </div>
              ) : (
                <div className="w-full mt-4">
                  <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                </div>
              )}
            </div>
            <div className="w-full border-b mb-[1.5em]  pb-[1.5em] mt-[1em]">
              <div className="flex justify-between items-center">
                <h2 className=" font-bold text-[1.5em]">Adicione um serviço:</h2>
                <button className="bg-[#222] text-[#FFF]  py-[0.5em] px-[0.5em] transition duration-[0.5s] hover:text-[#ffbb33] border-none max-h-40 cursor-pointer" onClick={toggleServiceForm}>
                  {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                </button>
              </div>
              <div>
                {showServiceForm && 
                  <ServiceForm
                    handleSubmit={createService}
                      btnText="Adicionar Serviço"
                      projectData={project}
                  />}
              </div>
            </div>
            <h2 className="font-bold text-[1.5em] mt-[2em]">Serviços</h2>
            <Container customClass="mt-[1em] flex">
              {services.length > 0 &&
                 services.map((service) => (
                   <ServiceCard
                   id={service.id}
                   name={service.name}
                   cost={service.cost}
                   description={service.description}
                   key={service.id}
                   handleRemove={removeService}
                   />
                 ))
              }
              {services.length === 0 && <p>Não há serviços cadastrados.</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project