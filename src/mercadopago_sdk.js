const axios = require("axios");

class MercadoPagoSdk {
  constructor() {}
  httpOrder({ options, client }) {
    return new Promise((resolve, reject) => {
      axios
        .post(options.hostname, client, {
          headers: options.headers,
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }

  httpOrderCancel({ options }) {
    const data = {
      status: "cancelled",
    };
    return new Promise((resolve, reject) => {
      axios
        .put(options.hostname, data, { headers: options.headers })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }

  httpOrderStatus({ options }) {
    return new Promise((resolve, reject) => {
      axios
        .get(options.hostname, {
          headers: options.headers,
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
}

module.exports = MercadoPagoSdk;
