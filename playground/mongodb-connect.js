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

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, res) => {
    //   if (err) {
    //     console.log('Unable to insert todo', err);
    //     return;
    //   }

    //   console.log(JSON.stringify(res.ops), undefined, 2);
    // });

    db.collection('Users').insertOne({
      name: 'Bob',
      age: 24,
      location: "Everywhere" 
    }, (err, res) => {
      if (err) {
        console.log('Unable to insert user', err);
        return;
      }

      console.log(res.ops[0]._id.getTimestamp());
    });
    
    client.close();
  }
);