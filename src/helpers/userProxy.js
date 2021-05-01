import fetchUser from "../services/fetchUser";

function UserProxy() {
  this.cache = {};
  this.clearCache = function () {
    this.cache = {};
  };
  this.getUser = function (id) {
    return new Promise(async (resolve) => {
      if (!this.cache[id]) {
        const response = await fetchUser(id);
        if (response.data) {
          this.cache[id] = response;
        }
        if (response.error) {
          resolve(response);
        }
      }
      resolve(this.cache[id]);
    });
  };
}

const userProxy = new UserProxy();

export default userProxy;
