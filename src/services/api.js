import axios from 'axios'

class Api {
  constructor() {
    this.http = axios.create({
      baseURL: process.env.REACT_APP_URI_MELI
    })
  }

  get(url) {
    return this.http.get(url)
  }

}

export default new Api()