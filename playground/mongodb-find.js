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

    // db.collection('Todos')
    //   .find({_id: new ObjectID('5bc50161a445eb6aec43ff5d')})
    //   .toArray()
    //   .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    //   }, (err => {
    //     console.log(err);
    //   }));

    db.collection('Users')
      .find({name: 'Bob'})
      .toArray()
      .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
      })

    db.collection('Todos')
      .find()
      .count()
      .then((count) => {
        console.log(`Todos count: ${count}`);
        
      }, (err => {
        console.log(err);
      }));

    
    //client.close();
  }
);