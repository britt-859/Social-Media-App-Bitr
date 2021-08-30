import UsersApi from "./bitr-users-api";

class BitrApi {
  constructor() {
    /**
     * @type {string}
     * @private
     */
    this.host = "http://localhost:5050";

    /**
     * @type {UsersApi}
     * @private
     */
    this.usersApi = new UsersApi(this.host);
  }

  users() {
    return this.usersApi;
  }
}

const instance = new BitrApi();

export default instance;
