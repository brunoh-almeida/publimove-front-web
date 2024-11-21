import {ReactNode} from "react";
import "./GridContainer.css"

export interface Props {
    children: ReactNode
}

export function GridContainer({children}: Props) {
    return (
        <div className={"grid-container"}>
            {children}
        </div>
    )
}