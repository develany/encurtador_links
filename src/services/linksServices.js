const linksRepository = require("../repositories/linksRepository");
const randomstring = require('randomstring');

const buscar = async () => {
  const resposta = await linksRepository.buscar();

  return resposta;
};

const buscarPeloCode = async (code) => {
  const resposta = await linksRepository.buscarPeloCode(code);

  return resposta;
};

const criar = async (link) => {

  if (!link.url) {
    throw new Error("url é obrigatoria")
  }

  link.code = randomstring.generate(5);

  await linksRepository.criar(link);
};


const linksServices = { buscar, buscarPeloCode, criar };

module.exports = linksServices;
