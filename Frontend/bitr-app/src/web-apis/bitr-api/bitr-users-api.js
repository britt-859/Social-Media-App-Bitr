import { Result } from "../Result";

/**
 * @typedef {Object} User
 * @property {number} user_id
 * @property {string} username
 * @property {string} fName
 * @property {string} lName
 * @property {string} email
 */

/**
 * @typedef {Object} UserDTO
 * @property {string} username
 * @property {string} fName
 * @property {string} lName
 * @property {string} email
 * @property {string} password
 */

class UsersApi {
  /**
   * @param {string} host
   */
  constructor(host) {
    /**
     * @type {string}
     * @private
     */
    this.host = host;
  }

  /**
   *
   * @returns {Promise<Result<Array<User>>>}
   */
  async all() {
    const response = await fetch(`${this.host}/users`);
    const json = await response.json();

    if (response.ok) {
      return new Result(json, null);
    }

    return new Result(null, json);
  }

  /**
   * @param {number} userID
   * @returns {Promise<Result<User>>}
   */
  async get(userID) {
    const response = await fetch(`${this.host}/users/${userID}`);
    const json = await response.json();

    if (response.ok) {
      return new Result(json, null);
    }

    return new Result(null, json);
  }

  /**
   * @param {UserDTO} userDTO
   * @returns {Promise<Result<User>>}
   */
  async create(userDTO) {
    const response = await fetch(`${this.host}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDTO),
    });

    const json = await response.json();

    if (response.ok) {
      return new Result(json, null);
    }

    return new Result(null, json);
  }
}

export default UsersApi;
