const app = require('./app')


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/:etfA,:etfB', (req, res) => {
  
  res.send("The first EFT is: " + req.params.etfA + " while the second is: " + req.params.etfB)
})