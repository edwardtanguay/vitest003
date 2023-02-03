import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('this is the API');
});

app.get('/test', (req, res) => {
	res.send('test works');
});

export default app;
