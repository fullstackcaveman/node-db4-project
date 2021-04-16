const express = require('express');
const recipiesRouter = require('./recipies/recipies-router');

const server = express();

server.use(express.json());

server.use('/api/recipies', recipiesRouter);

server.use('*', (req, res) => {
	res.json({ api: 'up' });
});

// server.use((err, req, res, next) => {
// 	res.status(500).json({
// 		customMessage: 'something went wrong in the recipies router',
// 		message: err.message,
// 		stack: err.stack,
// 	});
// });

module.exports = server;
