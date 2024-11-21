import './components/infocard/InfoCard.css'
import './App.css'
import {InfoCard} from "./components/infocard/InfoCard.tsx";
import {TopShape} from "./components/top-shape/TopShape.tsx";
import {MapComponent} from "./components/map/Map.tsx";
import {MainContainer} from "./components/container/maincontainer/MainContainer.tsx";
import {GridContainer} from "./components/container/maincontainer/GridContainer.tsx";
import {ColumnContainer} from "./components/container/maincontainer/ColumnContainer.tsx";



function App() {
    return (
        <MainContainer>
            <div className={"padding"}>
                <TopShape/>
                <TitleSection title={"Olá Felipe Pires"} subtitle={"Confira aqui o andamento da sua campanha"}/>
                <CardList/>
                <GridContainer>
                    <MapComponent/>
                    <div className={"padding-r padding-b"}>
                        <ColumnContainer>
                            <InfoCard
                                title={"R$ 1.000,00"}
                                subtitle={"Custo diurno"}
                            />
                            <InfoCard
                                title={"R$ 300,00"}
                                subtitle={"Custo noturno"}
                            />
                            <InfoCard
                                title={"5.443"}
                                subtitle={"Impressões"}
                            />
                            <InfoCard
                                title={"430"}
                                subtitle={"Passageiros Transportados"}
                            />

                        </ColumnContainer>
                    </div>
                </GridContainer>
            </div>
        </MainContainer>
    )
}

interface TitleProp {
    title: string,
    subtitle: string,
}

function TitleSection({title, subtitle}: TitleProp) {
    return (<div className={"title-section"}>
        <h1>
            {title},
        </h1>
        <h3> {subtitle}</h3>
    </div>)
}

function CardList() {
    return (
        <div className={"info-card-list"}>
            <InfoCard
                title={"2.203,54 km"}
                subtitle={"Média / motorista"}
            />
            <InfoCard
                title={"25.304,54 km"}
                subtitle={"Totais"}
            />
            <InfoCard
                title={"123 Hrs"}
                subtitle={"de Exposição"}
            />
            <InfoCard
                title={"78 Hrs"}
                subtitle={"Diurnas"}
            />
            <InfoCard
                title={"23 Hrs"}
                subtitle={"Noturnas"}
            />
            <InfoCard
                title={"2"}
                subtitle={"Motoristas"}
            />
            <InfoCard
                title={"R$ 1300,03"}
                subtitle={"Custo total"}
            />
        </div>
    )
}

export default App
