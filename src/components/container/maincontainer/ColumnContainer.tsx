import {ReactNode} from "react";
import "./ColumnContainer.css"

export interface Props {
    children: ReactNode
}

export function ColumnContainer({children}: Props) {
    return (
        <div className={"column-container"}>
            {children}
        </div>
    )
}