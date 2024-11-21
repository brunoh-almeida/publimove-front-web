import {ReactNode} from "react";
import "./MainContainer.css"

export interface MainContainerProp {
    children: ReactNode
}

export function MainContainer({children}: MainContainerProp) {
    return <div className={"main-container"}>
        {children}
    </div>
}
