const mercadopagoPix = require("mercadopago-pix");

mercadopagoPix.configure({
  access_token: "YOUR_ACCESS_TOKEN",
});

mercadopagoPix
  .cancel({ order_id: "55825357735" })
  .then((response) => console.log(response))
  .catch((error) => console.log(error.message));
