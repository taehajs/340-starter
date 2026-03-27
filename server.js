const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'CSE Motors' });
});

const inventoryRoute = require('./routes/inventoryRoute');
app.use('/inventory', inventoryRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('errors/error', { message: "Something went wrong!" });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

