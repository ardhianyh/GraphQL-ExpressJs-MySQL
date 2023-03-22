const express = require('express');
const graphqlApp = require('./app/graphql/index');

const app = express();
const port = 1234;

app.use('/graphql', graphqlApp)

app.listen(port, () => {
   console.log('Server running on port ' + port);
})