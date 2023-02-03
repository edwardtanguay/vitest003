import express from 'express';

const port = 4111;
const app = express();

app.get('/', (req, res) => {
	res.send('this is the API');
});

app.get('/test', (req, res) => {
	res.send('test works');
});

// app.listen(port, () =>
// 	console.log(`listening on port http://localhost:${port}`)
// );

export default app;
