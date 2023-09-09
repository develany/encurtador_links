const { Pool } = require("pg");

const config = {
  host: process.env.DB_CONFIG_HOST,
  port: process.env.DB_CONFIG_PORT,
  user: process.env.DB_CONFIG_USER,
  password: process.env.DB_CONFIG_PASSWORD,
  database: process.env.DB_CONFIG_DATABASE,
  ssl: true,
};


const pool = new Pool(config);

const buscar = async () => {
  const resposta = await pool.query("select * from link");
  return resposta.rows;
};

const buscarPeloCode = async (code) => {

  await pool.query(`update link set hits = hits + 1 where code = '${code}'`);

  const respostaAtualizada = await pool.query(`select * from link where code = '${code}'`);

  return respostaAtualizada.rows[0];
};


const criar = async (link) => {
  await pool.query(
    `insert into link (url, code, hits) values('${link.url}', '${link.code}', 0)`
  );
};



const linksRepository = { buscar, criar, buscarPeloCode };
module.exports = linksRepository;
