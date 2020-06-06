const express = require('express');
const cors = require('cors');
const routes = require('./router/router');
// const path = require('path');

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use('/index', express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
app.use(routes);

// app.get('/index', (req, res) => {
//   res.sendFile(path.join(__dirname, './build/prateleiras.html'));
// });

app.listen(port, console.log(`servidor on na porta ${port}`));
