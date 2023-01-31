const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = 3000


app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/index',(req,res)=>{
const  mahasiswa = [
    {
        nama : `ridlo nanda`,
        kelas :`trkj`,
    },
    {
        nama :`hafids`,
        kelas : 'mesin'
    },
    {
        nama :`alba`,
        kelas:`akutansi`
    }
];
    res.render('index', {
        nama: `RIDLO  NANDA`,
        mahasiswa,
        title: 'index',
        layout: 'layout/layout'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about',
        layout:'layout/layout'
    })
})
app.get('/contact',(req,res)=>{
    res.render('contact',{
        title: 'contact',
        layout:'layout/layout'
    })
})
app.listen(port,()=>{
    console.log(`Server Sudah Berjalan Dengan Baik ${port}`)
})