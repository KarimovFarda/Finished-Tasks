import axios from "axios";
export class HttpClient {
  baseUrl;
  constructor(url) {
    this.baseUrl = url;
  }
  async get(url) {
    const token = localStorage.getItem("token");
    return await axios.get(`${this.baseUrl}/${url}`, {
      headers: {
        Authorization: token,
      },
    });
  }
  async post(url, data) {
    const token = localStorage.getItem("token");
    return await axios.post(`${this.baseUrl}/${url}`, data, {
      headers: {
        Authorization: token,
      },
    });
  }
  async delete(url) {
    const token = localStorage.getItem("token");
    return await axios.delete(`${this.baseUrl}/${url}`, {
      headers: {
        Authorization: token,
      },
    });
  }

  async edit(url, data) {
    const token = localStorage.getItem("token");
    return await axios.put(`${this.baseUrl}/${url}`, data, {
      headers: {
        Authorization: token,
      },
    });
  }
}