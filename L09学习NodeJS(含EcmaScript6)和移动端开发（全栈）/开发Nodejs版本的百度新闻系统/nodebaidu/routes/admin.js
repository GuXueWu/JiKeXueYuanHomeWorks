var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig= require('./dbconfig');

var connection = mysql.createPool(dbconfig);

/* 后台倒序查询所有的news*/
router.get('/getnews', function (req, res, next) {
    connection.query('SELECT * FROM `news` ORDER BY id desc', function (err, rows) {
        res.json(rows);
    })
});

//点击确认更新
router.post('/update', function (req, res) {
    var newstitle = req.body.newstitle;
    var newsimg = req.body.newsimg;
    var newstime = req.body.newstime;
    var newstype = req.body.newstype;
    var newssrc = req.body.newssrc;
    var newsid = req.body.newsid;
    connection.query('UPDATE `news` SET `newstype`=?,`newstitle`=?,`newsimg`=?,`newstime`=?,`newssrc`=? WHERE `id`=?',
        [newstype, newstitle, newsimg, newstime, newssrc, newsid]
        , function (err, rows) {
            if(!err){
                res.json({success:true});
            }
        })
});

//查询某一条news
router.get('/curnews', function (req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM news WHERE `news`.`id` =?', [newsid], function (err, rows) {
        res.json(rows);
    })
});

//删除一条news
router.post('/delete', function (req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `news`.`id` = ?',
        [newsid]
        , function (err, rows) {
            if(!err){
                res.json({success:true});
            }
        })
});

//插入一条news
router.post('/insert', function (req, res) {
    var newstitle = req.body.newstitle;
    var newsimg = req.body.newsimg;
    var newstime = req.body.newstime;
    var newstype = req.body.newstype;
    var newssrc = req.body.newssrc;
    connection.query('INSERT INTO `news` (`newstype`,`newstitle`,`newsimg`,`newstime`,`newssrc`) VALUES (?,?,?,?,?)',
        [newstype,newstitle,newsimg,newstime,newssrc]
        , function (err, rows) {
            if(!err){
                res.json({success:true});
            }
        })
});


module.exports = router;
