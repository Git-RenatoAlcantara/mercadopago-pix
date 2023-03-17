const mercadopagoPix = require("mercadopago-pix");

mercadopagoPix.configure({
  access_token: "YOUR_ACCESS_TOKEN",
});

client.transaction_amount = 50.0;
client.description = "Compra de teste";
client.payer.email = "renatoalcantara2022@gmail.com";

mercadopagoPix
  .create({ client })
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
