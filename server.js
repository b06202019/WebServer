const express = require('express')
const bodyParser = require('body-parser')
const app = express()


// 設定預設port為 1377，若系統環境有設定port值，則以系統環境為主
app.set('port', (process.env.PORT || 1377))

// 設定靜態資料夾
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/query', function(req, res) {

    // 去mongodb 查資料

    var response = {
        result: true,
        data: [{
                name: "小米路由器",
                price: 399,
                count: 1,
                image: 'http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1490332273.78529474.png?width=160&height=160'
            },
            {
                name: "米家全景相機",
                price: 7995,
                count: 1,
                image: 'http://i01.appmifile.com/f/i/g/2016overseas/mijiaquanjingxiangji800.png?width=160&height=160'
            }
        ]
    }
    res.json(response)
})

app.post('/insert', function(req, res) {
    var data = {
        name: req.body.name,
        price: req.body.price,
        count: req.body.count,
        image: req.body.image
    }


    //將 data 寫入 mongodb

    var response = {
        result: true,
        data: data
    }
    res.json(response)
})

// 啟動且等待連接
app.listen(app.get('port'), function() {
    console.log('Server running at http://127.0.0.1:' + app.get('port'))
})