const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', 
  { useNewUrlParser: true },  
  (err, client) => {
    if (err) { 
      console.log('unable to connect to MongoDB server');
      return;
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result) => {
      console.log(result);
    });


    //client.close();
  }
);