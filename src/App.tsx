import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CountriesPage, CountryPage } from './pages'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CountriesPage />} />
                <Route path="/country/:code" element={<CountryPage />} />
            </Routes>
        </BrowserRouter>
    )
}
