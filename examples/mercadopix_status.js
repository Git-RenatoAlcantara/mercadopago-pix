const mercadopagoPix = require("mercadopago-pix");

mercadopagoPix.configure({
  access_token: "YOUR_ACCESS_TOKEN",
});

mercadopagoPix
  .status({ order_id: "55825357735" })
  .then((response) => console.log(response.status))
  .catch((err) => console.error(err));
