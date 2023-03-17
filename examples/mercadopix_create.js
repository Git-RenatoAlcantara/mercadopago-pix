const mercadopagoPix = require("mercadopago-pix");

mercadopagoPix.configure({
  access_token: "YOUR_ACCESS_TOKEN",
});

const client = {
  transaction_amount: 0.01,
  description: "Pagamento Teste",
  payment_method_id: "pix",
  payer: {
    email: "renatoalcantara2022@gmail.com",
  },
};

mercadopagoPix
  .create({ client })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
