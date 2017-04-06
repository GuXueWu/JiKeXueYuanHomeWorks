var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig= require('./dbconfig');

/* 在主页获取新闻时请求 */
router.get('/', function(req, res) {
    var newstype=req.query.newstype;
    var connection =mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('SELECT * FROM `news` WHERE `newstype` = ?',[newstype],function (err,rows,fields) {
        res.json(rows);
    })
});

module.exports = router;
