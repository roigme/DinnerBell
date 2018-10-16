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
  // Saves a user to the database
  updateUser: function(id, formData) {
    return axios.put("/api/user/" + id, formData);
  },
  //Gets all hosts
  getHosts: function() {
    return axios.get("/api/host");
  },
  // Gets the host with the given id
  getHostByID: function(id) {
    return axios.get("/api/host/" + id);
  },
  getHostByFoodAndGroup: function(foodType, maxGroup) {
    return axios.get('/api/host/' + foodType + '/' + maxGroup);
  },
  // Saves a host to the database
  updateHost: function(id, formData) {
    return axios.put("/api/host" + id, formData);
  }
};