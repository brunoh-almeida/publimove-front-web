import "./TopShape.css"
import Shape from '../../assets/top-shape.svg'
import Logo from '../../assets/logo-horizontal-azul-amarela.svg'

export function TopShape() {
    return (
        <div className={"top-shape"}>
            <img className={"shape"} src={Shape}/>
            <img className={"logo"} src={Logo}/>
            <img className={"shape"} src={Shape}/>
        </div>
    )
}

