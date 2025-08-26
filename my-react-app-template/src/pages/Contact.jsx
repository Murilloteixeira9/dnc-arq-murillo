import Banner from "../componentes/Banner/Banner"
import ContactForm from "../componentes/ContactForm/ContactForm"
import Header from "../componentes/Header/Header"
import Footer from "../componentes/Footer/Footer"
import { useContext } from 'react'

//CONTEXT
import { AppContext } from '../contexts/AppContext'

function Contact(){
    const appContext = useContext(AppContext)

    return(
        <>
         <Header/>
            <Banner title={appContext.languages?.[appContext.language]?.menu.contact|| ""} image='contact.jpg'/>
            <div className="container">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )

}

export default Contact