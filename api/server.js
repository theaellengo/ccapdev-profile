const express = require('express');
const { envPort, mongoURI } = require('./config');
const mongoose = require('mongoose');
const cors = require('cors') // will allow us to make ajax requests from frontend to backend
const morgan = require('morgan') //http requests automatic logger

const servestatic = require('serve-static')
const router = express.Router();

// import routes
const usersRoutes = require('./routes/users')
const reviewRoutes = require('./routes/reviews')
const profsRoutes = require('./routes/profs')

// create express app
const app = express();
const port = envPort;

// setup mongoose
const options = { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
};

//cors
/*
var whitelist = ['https://test-prof-ile.herokuapp.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
*/

// Setup middlewares
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cors()); // allow access to API from difference sources
app.use(morgan('tiny')) // logs HTTP requests

app.use("/api", router);

// serve static files 
app.use(express.static('public'));
mongoose.connect(mongoURI, options)
.then(() => {
    console.log(`Database connected successfully ${mongoURI}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

// add routes
app.use('/users', usersRoutes);
app.use('/reviews', reviewRoutes);
app.use('/profs', profsRoutes);

if(process.env.NODE_ENV === 'production'){
  app.use(servestatic(path.join(path.resolve(), 'dist')));
}

// listen on port
app.listen(port, () => console.log(`Listening to ${port}`));