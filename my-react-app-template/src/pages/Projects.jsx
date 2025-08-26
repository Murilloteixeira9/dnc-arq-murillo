import Banner from "../componentes/Banner/Banner"
import Header from "../componentes/Header/Header"
import Footer from "../componentes/Footer/Footer"
import ProjectsList from "../componentes/ProjectsList/ProjectsList"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Projects(){
    const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
            <Banner title={appContext.languages?.[appContext.language]?.menu.projects|| ""} image='projects.jpg'/>
            <div className="container">
                <ProjectsList/>
            </div>
            <Footer/>
          
        </>
    )
} 

export default Projects