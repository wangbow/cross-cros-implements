const express = require('express');
express()
    .get('/all', (req, res) => {
        res.set('Access-Control-Allow-Origin', req.headers.origin);
        res.send({ info: '通过在请求头中设置 Access-Control-Allow-Origin 来告诉浏览器：允许所有的跨域请求' })
    })
    .all('*', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'token');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.header('Access-Control-Max-Age', 3600);
        if (req.method == 'OPTIONS') {
            res.send(200);
        } else {
            next();
        }
    })
    .get('/addHeader', (req, res) => {
        res.send({ info: '增加了自定义请求头的非简单请求' })
    })
    .listen(8082, console.log('server run port 8082'))