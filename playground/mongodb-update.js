const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', 
  { useNewUrlParser: true },  
  (err, client) => {
    if (err) { 
      console.log('unable to connect to MongoDB server');
      return;
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos')
    .findOneAndUpdate({
      _id: new ObjectID('5bc519d6be07480a939e34ef')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    //client.close();
  }
);