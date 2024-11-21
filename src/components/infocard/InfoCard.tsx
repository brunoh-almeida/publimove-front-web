export interface CardProps {
    title: string,
    subtitle: string,
}

export function InfoCard({ title, subtitle}: CardProps) {
    return (<div className={"info-card"}>
        <p className={"info-card-icon-text info-card-title"}>{title}</p>
        <p className={"info-card-icon-text info-card-subtitle"}>{subtitle}</p>
    </div>)
}
