const MercadoPagoSdk = require("./mercadopago_sdk");

class MercadopagoPix {
  #accessToken = null;
  #mercadoPagoSdk = null;

  constructor() {
    this.#mercadoPagoSdk = new MercadoPagoSdk();
  }

  configure({ access_token }) {
    this.#accessToken = access_token;
  }

  async create({ client }) {
    const options = {
      hostname: "https://api.mercadopago.com/v1/payments",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#accessToken}`,
      },
    };

    return await this.#mercadoPagoSdk.httpOrder({ options, client });
  }

  async cancel({ order_id }) {
    let time = Date.now().toString();
    const options = {
      hostname: `https://api.mercadopago.com/v1/payments/${order_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#accessToken}`,
        timestamp: time,
      },
    };
    return await this.#mercadoPagoSdk.httpOrderCancel({ options });
  }

  async status({ order_id }) {
    const options = {
      hostname: `https://api.mercadopago.com/v1/payments/${order_id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#accessToken}`,
      },
    };

    return this.#mercadoPagoSdk.httpOrderStatus({ options });
  }
}

exports.MercadopagoPix = MercadopagoPix;
