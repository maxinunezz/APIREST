const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev")); //muestra en mi consola la respuesta de la peticion
app.use(express.urlencoded({ extended: false })); //procesa datos sencillos (inputs) provenientes de otra app a traves de formularios, no imagenes, etc.
app.use(express.json()); //le permite a mi aplicacion poder recibir y procesar datos en formato json

//routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
