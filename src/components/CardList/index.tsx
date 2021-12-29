import { Card, ICard } from '../Card'

interface ICardList {
    cards: ICard[]
}

export const CardList = ({ cards }: ICardList) => {
    return (
        <div>
            {cards.map((card) => {
                return (
                    <Card
                        country={card.country}
                        capital={card.capital}
                        region={card.region}
                        flagUrl={card.flagUrl}
                        population={card.population}
                        key={card.country}
                    />
                )
            })}
        </div>
    )
}
