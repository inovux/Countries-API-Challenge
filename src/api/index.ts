import axios from 'axios'

const baseURL = 'https://restcountries.com/v2'

export const apiInstance = axios.create({ baseURL })
