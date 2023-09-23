const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

app.use(cors());

app.use((req, res, next) => {
  res.hateoas = (data) => {
    const basePath =
      req.protocol + "://" + req.get("host") + req._parsedUrl.pathname;

    return data.map((item) => {
      const resource = { ...item };
      resource.links = [{ rel: "self", href: basePath + "/" + item.id }];
      return resource;
    });
  };
  next();
});

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
