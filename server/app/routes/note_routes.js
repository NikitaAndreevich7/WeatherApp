const MongoClient = require('mongodb').MongoClient;
module.exports = function (app, db) {


  app.post('/registration', (req, res) => {

    const weather = { email: req.body.email, password: req.body.password };
    console.log(weather)

    MongoClient.connect(db.url, (err, database) => {
      const myAwesomeDB = database.db('weather')

      myAwesomeDB.collection('users').findOne({email: req.body.email}, (err, result) => {
        console.log('REGISTRATION RESULT - ',result)
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else if(result === null) {
          myAwesomeDB.collection('users').insertOne(weather, (err, result) => {
            if (err) {
              res.send({ 'error': 'An error has occurred' });
            } else {
              res.send(result)
            }
          })
        }else{
          console.log('Пользователь с таким email уже существует.')
          res.send('Пользователь с таким email уже существует.')
        }
      });
    })
  });
   


    app.post('/auth', (req, res) => {

    const weather = { email: req.body.email, password: req.body.password };
    console.log(weather)

    MongoClient.connect(db.url, (err, database) => {
      const myAwesomeDB = database.db('weather')

      myAwesomeDB.collection('users').findOne(weather, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else if(result != null) {
          res.send(result)
        }else{
          console.log('Проверьте пожалуйста данные, или зарегестрируйтесь.')
          res.send('Проверьте пожалуйста данные, или зарегестрируйтесь.')
        }
      });
    })
  });
};








