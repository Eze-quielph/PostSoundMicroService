const app = require('./src/app');
require('dotenv').config()

app.listen(4001, ()=>{
  console.log('Server running on port 4001')
})