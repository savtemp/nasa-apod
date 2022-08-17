import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const nasaApi = Axios.create({
  baseURL: `https://api.nasa.gov/`,
  timeout: 4000,
  params: {
    api_key: `OfHcrCqs2QGjJqUXrrK4aK3sZfH9vIhYs2ZRA25A`
  }
})
