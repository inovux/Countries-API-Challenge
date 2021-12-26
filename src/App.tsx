import { Card } from './components/Card'

export const App = () => {
    return (
        <div>
            <Card
                country="The Netherlands"
                population={20000000}
                region="Utrecht"
                capital="Amsterdam"
                flagUrl="https://flagcdn.com/w320/nl.png"
            />
        </div>
    )
}
