// const onSubmit = data => {
//     history.push("/allActivity");

//     const newRegisteredActivity = { ...data, selectedDate, activityImage }
//     console.log(newRegisteredActivity);
//     console.log(activityImage,activityName)

//     fetch("https://whispering-fjord-15086.herokuapp.com/addNewUser", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newRegisteredActivity)
//     }) 
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//       })
//   };



// const history = useHistory()
// const handleActivityName = () => {
//     history.push(`/register/${activityName}/${activityImage}`);
// }


// const [registeredUser, setRegisteredUser] = useState([]);
// useEffect(() => {
//     fetch(`https://whispering-fjord-15086.herokuapp.com/activityAll`)
//         .then(res => res.json())
//         .then(data => setRegisteredUser(data));
// }, []
// )


// const [register, setRegister] = useState([]);
// const [loggedInUser, setLoggedInUser] = useContext(UserContext);
// console.log(register);
// useEffect(() => {
//     fetch(`https://whispering-fjord-15086.herokuapp.com/activity?email=` + loggedInUser.email)
//         .then(res => res.json())
//         .then(data => setRegister(data));
// }, [])


// const onSubmit = data => {    
//     const newEvent = { ...data}
//     fetch(`https://whispering-fjord-15086.herokuapp.com/addEvent`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newEvent)
//     })
//       .then(res => res.json())
//       .then(data => {
//         alert("Event created successfully.Everyone will see it on home page.Visit home page to see your event")
//       })
//   };


// const [event, setEvent] = useState([]);
// useEffect(() => {
//     fetch(`https://whispering-fjord-15086.herokuapp.com/event`)
//         .then(res => res.json())
//         .then(data => setEvent(data));
// }, []
// )




// ------------index.js---------

// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require("cors");
// require('dotenv').config()
// const app = express()
// const port = 5000

// app.use(bodyParser.json());
// app.use(cors());


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://nisha123:nisha007@cluster0.pgiio.mongodb.net/volunteer?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
// client.connect(err => {
//   const registeredCollection = client.db("volunteer").collection("registration");
//   const eventCollection = client.db("volunteer").collection("registration");

//   app.post('/addNewUser', (req, res) => {
//     const newRegisteredActivity = req.body;
//     registeredCollection.insertOne(newRegisteredActivity)
//     .then(result => {    res.send(result.insertedCount > 0)})
//     console.log(req.body)
//     console.log(err);
//   })


//   app.post('/addEvent', (req, res) => {
//     const newEvent = req.body;
//     eventCollection.insertOne(newEvent)
//     .then(result => {    res.send(result.insertedCount > 0)})
//     console.log(req.body)
//     console.log(err);
//   })


//   app.get('/event', (req, res) => {
//     eventCollection.find()
//     .toArray((err, documents)=> {
//         res.send(documents);
//     })
//   })

// app.get('/activity', (req, res) => {
//   registeredCollection.find({email: req.query.email})
//   .toArray((err, documents)=> {
//       res.send(documents);
//   })
// })

// app.get('/activityAll', (req, res) => {
//   registeredCollection.find({})
//   .toArray((err, documents)=> {
//       res.send(documents);
//   })
// })

// app.get('/', (req, res) => {
//   res.send("hello from db it's working")
// })



// });



// app.listen(process.env.PORT || port)


// ----------gitignore-------
// node_modules/
// .env


// ---------.env-----
// DB_NAME = volunteer-network
// DB_USER = volunteer
// DB_PASS = volunteer004

// ---------packagejson-----
// {
//     "name": "volunteer-server",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "start": "node index.js",
//       "start:dev": "nodemon index.js",
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "body-parser": "^1.19.0",
//       "cors": "^2.8.5",
//       "dotenv": "^8.2.0",
//       "express": "^4.17.1",
//       "mongodb": "^3.6.2"
//     }
//   }