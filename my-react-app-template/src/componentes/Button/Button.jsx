//ASSETS
import './Button.css'
import Logo from '../../assets/dnc-logo.svg'
import WhiteArrow from '../../assets/white-arrow.svg'

function Button({arrow, buttonStyle, loading, children, ...props }){
    return(
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={WhiteArrow}/>}
        </button>
    )
}

export default Button