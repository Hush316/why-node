const axios = require('axios')

axios.get('http://localhost:3160').then((res) => {
  console.log(res.data)
})
