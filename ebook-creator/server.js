const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults(true);
const { v4: uuidv4 } = require('uuid'); 
let cors = require('cors');
const db = router.db;
server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);


// register

server.post('/api/registration', async (req, res) => {
  const { email, password, firstName, lastName, gender, role, phone } = req.body;
  const user = db.get('users').find({ email }).value();
  if (user) {
    res.status(409).json({ success: false, message: 'Already Have' });
  } else {
    const newUser = {  id: uuidv4(), email, password, firstName, lastName, gender, role, phone };
    db.get('users').push(newUser).write();
    res.json({ success: true, message: 'Registration successful', user: newUser });
  }
});

// Add custom login route
server.post('/api/login', async(req, res) => {
  const { email, password } = req.body;
  const user = db.get('users').find({ email, password }).value();
  if (user) {
    res.json({ success: true, message: 'Login successful', user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});



const port = 8081;
server.use("/api", router);
server.listen(port, () => {
  console.log(`JSON server is running ${port}`);
});
