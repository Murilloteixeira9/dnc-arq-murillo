import Header from "../componentes/Header/Header"
import Footer from "../componentes/Footer/Footer"
import Hero from "../componentes/Hero/Hero"
import ProjectsList from "../componentes/ProjectsList/ProjectsList"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Home(){
    const appContext = useContext(AppContext)
    return(
        <>
           <Header/>
           <div className="container">
                <Hero/>
                <ProjectsList/>
                <Footer/>
           </div>
          
        </>
    )
}

export default Home