import { Card, ICountry } from '../CountryCard'

interface ICountryCardList {
    countries: ICountry[]
}

export const CountryCardList = ({ countries }: ICountryCardList) => {
    return (
        <div>
            {countries.map((country) => {
                return (
                    <Card
                        country={country.country}
                        capital={country.capital}
                        region={country.region}
                        flagUrl={country.flagUrl}
                        population={country.population}
                        key={country.country}
                    />
                )
            })}
        </div>
    )
}
