import pool from './dbConfig.js';

const findAll = async () => {
        try {
            const result = await pool.query(`SELECT Livro.cod_livro,
                                              Livro.titulo,
                                              Autor.nome as autor
                                        FROM 
                                        Livro
                                        INNER JOIN
                                        Autor ON Livro.cod_autor = Autor.cod_autor`);
            return result.rows;
        } catch (err) {
            console.log("Erro ao fazer consulta ", err);
            return [];
        }
}

const findById = async(id) => {
    const sql = (`SELECT Livro.cod_livro,
                         Livro.titulo,
                         Autor.nome AS autor
                  FROM Livro
                  INNER JOIN
                  Autor ON Livro.cod_autor = Autor.cod_autor
                  Where Livro.cod_livro = $1                    
        `);
    try {
        const result = await pool.query(sql, [id]);
        return result.rows[0];
    } catch (err) {
        console.log("Erro ", err)
        return null;
    }
}

export default { findAll, findById };

