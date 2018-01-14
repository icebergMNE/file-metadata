const express = require('express')
const path = require('path')
const http = require('http')
const cors = require('cors')
// const bodyParser = require('body-parser')
const multer  = require('multer')
const upload = multer({ })

const app = express()
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors())

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');


app.get('/', (req, res)=>{

    res.render('index', {moze:'test'})
})

app.post('/post', upload.single('fajl'), function (req, res, next) {
    console.log(req.file)
    res.send({
        fileSizeBytes:req.file.size,
        fileSizeKiloBytes: req.file.size/1024
    })
  })

// app.post('/post', (req,res)=>{

//     console.log(req.file)
//     res.send('test')
// })



app.listen(process.env.PORT || 3004);
console.log('listening on port: ' + 3004);