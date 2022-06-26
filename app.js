// Imports
const express = require('express')
const app = express()
const port = 5000

// Static Files
app.use(express.static('style'));
app.use(express.static('vendors'));
// app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('assets'));
// Specific folder example

app.use('', express.static(__dirname + ''))
app.use('/js', express.static(__dirname + 'vendors/js'))
app.use('/ti-icons', express.static(__dirname + 'vendors/ti-icons'))


// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
// app.get('', (req, res) => {
//     res.render('index', { text: 'Hey' })
// })

app.get('/dashboardAdmin', (req, res) => {
   res.render(__dirname + '/views/admin/dashboardAdmin.ejs')
})
app.get('/kelolaDosenAdmin', (req, res) => {
   res.render(__dirname + '/views/admin/kelolaDosenAdmin.ejs')
})
app.get('/persentaseMatkulAdmin', (req, res) => {
   res.render(__dirname + '/views/admin/persentaseMatkulAdmin.ejs')
})
app.get('/petaCpmkAdmin', (req, res) => {
   res.render(__dirname + '/views/admin/petaCpmkAdmin.ejs')
})

app.listen(port, () => console.info(`App listening on port ${port}`))