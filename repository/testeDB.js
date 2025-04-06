import pool from './dbConfig.js';

const testeDB = async () => {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Conexao bem sucedida!");
    }catch(err) {
        console.log("Erro ao conectar ao banco de dado", err);
    }
}

const select = async () => {
    try {
        const result = await pool.query(`SELECT Livro.cod_livro,
                                                Livro.titulo,
                                                Autor.nome as autor
                                        FROM Livro
                                        INNER JOIN
                                        Autor ON Livro.cod_autor = Autor.cod_autor
            `);
          console.table(result.rows);
     result.rows;
    } catch (err) {
        console.log("NÃO FOI POSSIVEL CONECTAR A  DO BANCO!!!!", err);
    }
}


testeDB();
select();
