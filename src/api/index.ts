import axios from 'axios'

const baseURL = 'https://restcountries.com/v3.1'

export const apiInstance = axios.create({ baseURL })
