const linksServices = require("../services/linksServices");

const buscar = async (req, res) => {
  try {
    const resposta = await linksServices.buscar()
    res.send(resposta);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


const buscarPeloCode = async (req, res) => {
  try {
    const resposta = await linksServices.buscarPeloCode(req.params.code)
    res.send(resposta);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const criar = async (req, res) => {

  try {
    const link = req.body
    await linksServices.criar(link)
    res.send("ok")
  } catch (error) {
    res.status(500).send({ error: error.message });
  }

};


const linksController = { buscar, criar, buscarPeloCode };



module.exports = linksController;
