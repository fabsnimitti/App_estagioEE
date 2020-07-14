//Configurar o setup da App:

//Importando os pacotes:
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
const mysql = require('mysql2/promise');
//Definindo a porta onde será executada nossa api:
var port = process.env.port || 3000;

//Criando uma instância da Rotas via Express:
var router = express.Router();
app.use(bodyParser.json())

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'king',
    password: '122225110',
    database: 'LABEE',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function getFromBD(sql) {
    const result = await pool.query(sql);
    return result[0][0];
}

async function analiseLogin(req, res, email, passwd) {
    var sql = "SELECT * FROM users where email='" + email + "'"
    var loginform = await getFromBD(sql)

    try {
        if (loginform.email == email && loginform.passwd == passwd) {
            res.json({ message: 'loginAutorizado' });
        } else {
            res.json({ message: 'erroLogin' });
        }

    } catch (err) {
        res.json({ message: 'erroLogin' });

    }

}

async function getDataLinha(req, res,) {
    let sql = "SELECT statusEstoque FROM estoque"
    let line = [];
    line[0] = await getFromBD(sql)
    line[0] = { statusEstoque: line[0].statusEstoque }
    sql = "SELECT statusRobo FROM estoque"
    line[1] = await getFromBD(sql)
    line[1] = { statusRoboEstoque: line[1].statusRobo }
    sql = "SELECT statusRobo FROM controle_qualidade"
    line[2] = await getFromBD(sql)
    line[2] = { statusControleQualidade: line[2].statusRobo }
    sql = "SELECT statusClp FROM CLP"
    line[3] = await getFromBD(sql)
    line[3] = { statusClp: line[3].statusClp }
    sql = "SELECT * FROM laiser"
    line[4] = await getFromBD(sql)
    line[4] = { statusRoboLaiser: line[4].statusRobo, statusImpressora: line[4].statusImpressora }
    sql = "SELECT * FROM medidora"
    line[5] = await getFromBD(sql)
    line[5] = { statusRobo: line[5].statusRobo, statusMedidora: line[5].statusmedidora }
    sql = "SELECT * FROM solda"
    line[6] = await getFromBD(sql)
    line[6] = { statusRobo: line[6].statusRobo, statusCasa: line[6].statuscasa }
    sql = "SELECT * FROM torno"
    line[7] = await getFromBD(sql)
    line[7] = { statusRobo: line[7].statusRobo, statusTorno: line[7].statusTorno }
    sql = "SELECT * FROM fresa"
    line[8] = await getFromBD(sql)
    line[8] = { statusRobo: line[8].statusRobo, statusFresa: line[8].statusFresa }
    sql = "SELECT unidades FROM estoque"
    line[9] = await getFromBD(sql)
    line[9] = { unidadesEstoque:line[9].unidades}
    res.json({
        statusEstoque: line[0],
        statusRoboEstoque: line[1],
        unidadesEstoque:line[9],
        statusControleQualidade: line[2],
        statusClp: line[3],
        statusLaiser: line[4],
        statusMedidora: line[5],
        statusSolda: line[6],
        statusTorno: line[7],
        statusFresa: line[8]
    });

}
async function user_cadastro(req, res) {
    let sql = "SELECT * FROM users where email='" + req.body.email + "'"
    let received = await getFromBD(sql)
    if (typeof received == "undefined") { //quer dizer que user não esta cadastrado ainda
        sql = "insert into users(email,passwd) values ('" + req.body.email + "','" + req.body.password + "')"
        getFromBD(sql)
        res.json({
            message: 'user criado'
        })
    }
    else {
        res.json({
            message: "user existente"
        })
    }
}
async function cadastro_processo(req, res){


    
}



//Todo request a api passará por essa função de callback primeiramente e podemos usar para log do lado do servidor
router.use(function (req, res, next) {
    console.log('Alguém está fazendo requisição a api ;)');
    next();
});

//Rota que criamos para informar que a api está online
router.get('/online', function (req, res) {

    res.json({ message: 'Beleza! Eu estou online =)' });
});

router.post('/login', async function (req, res) {

    analiseLogin(req, res, "fabsnimitti@gmail.com", "teste");
});


router.post('/getDataLinha', async function (req, res) {
    getDataLinha(req, res)

});
router.post('/cadastro', async function (req, res) {
    console.log(req.body)
    user_cadastro(req, res);
});
router.post('/processo', async function (req, res) {
    console.log(req.body)
    cadastro_processo(req, res);
});

//Denifindo uma rota prefixada '/api':
//Todas chamadas começaram com '/api/', exemplo localhost:8000/api/usuarios
app.use('/api', router);










//Iniciando a aplicação (Servidor)
app.listen(port);
console.log("Iniciando a app na porta " + port);
