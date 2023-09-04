const { Pool } = require("pg");

const config = {
  host: "ep-wandering-fog-44752516.us-east-2.aws.neon.tech",
  port: "5432",
  user: "develany",
  password: "F42nvrdAHzqK",
  database: "links",
  ssl: true,
};


const pool = new Pool(config);

const buscar = async () => {
  const resposta = await pool.query("select * from link");
  console.log(resposta.rows);
  return resposta.rows;
};

const buscarPeloCode = async (code) => {
  const resposta = await pool.query(`SELECT * FROM link WHERE code = '${code}'`);
  const link = resposta.rows[0];

  if (link) {
    await pool.query(`UPDATE link SET hits = hits + 1 WHERE code = '${code}'`);
    link.hits = parseInt(link.hits) + 1;
  }

  return link;
};


const criar = async (link) => {
  await pool.query(
    `insert into link (url, code, hits) values('${link.url}', '${link.code}', 0)`
  );
};



const linksRepository = { buscar, criar, buscarPeloCode };
module.exports = linksRepository;
