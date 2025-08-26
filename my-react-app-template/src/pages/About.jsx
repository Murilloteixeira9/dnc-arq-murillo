import { useContext } from 'react'
import AboutText from "../componentes/AboutText/AboutText"
import Banner from "../componentes/Banner/Banner"
import Header from "../componentes/Header/Header"
import Footer from "../componentes/Footer/Footer"

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function About(){
    const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
            <Banner title={appContext.languages?.[appContext.language]?.menu.about|| ""} image='about.jpg'/>
            <div className="container">
                <AboutText/>
            </div>
            <Footer/>
          
        </>
    )
}
export default About