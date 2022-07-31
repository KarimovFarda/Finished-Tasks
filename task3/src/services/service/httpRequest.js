import axios from "axios";
export class HttpClient {
  constructor(url) {
    this.baseUrl = url;
  }
  async get(url) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }
  async post(url, data) {
    return await axios.post(`${this.baseUrl}/${url}`, data);
  }
  async delete(url) {
    return await axios.delete(`${this.baseUrl}/${url}`);
  }
  async edit(url, data) {
    return await axios.put(`${this.baseUrl}/${url}`, data);
  }
}