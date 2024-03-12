const { Router } = require("express");
const router = Router();

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});
router.post("/", (req, res) => {
  const atributos = req.body;
  console.log("atributossss", atributos);
  if (atributos.nombre && atributos.director && atributos.clasificacion) {
    const id = movies.length + 1;
    const newMovie = { ...req.body, id };
    movies.push(newMovie);
    res.json(movies);
  } else {
    console.log("error");
  }
});

module.exports = router;
