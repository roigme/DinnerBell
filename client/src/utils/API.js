import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUserByID: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  //Gets all hosts
  getHosts: function() {
    return axios.get("/api/host");
  },
  // Gets the host with the given id
  getHostByID: function(id) {
    return axios.get("/api/host/" + id);
  },
  // Deletes the host with the given id
  deleteHost: function(id) {
    return axios.delete("/api/host/" + id);
  },
  // Saves a host to the database
  saveHost: function(hostData) {
    return axios.post("/api/host", hostData);
  }
};