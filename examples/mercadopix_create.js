const { mercadoPagoBrPix } = require("mercadopago-br-pix");

mercadoPagoBrPix.configure("YOUR_ACCESS_TOKEN");

const client = {
  transaction_amount: 0.01,
  description: "Pagamento Teste",
  payment_method_id: "pix",
  payer: {
    email: "renatoalcantara2022@gmail.com",
  },
};

mercadoPagoBrPix
  .createOrder(client)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
