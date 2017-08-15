const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // res.send('Goodbye World!');
  let data = [{"text":"Walk dog","done":true}, {"text":"Wash Car","done":false},{"text":"Buy oranges","done":false},{"text":"Call Mom","done":false},{"text":"Pay electrity bill","done":true}]

  res.render('todo', {pear: data})

})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
