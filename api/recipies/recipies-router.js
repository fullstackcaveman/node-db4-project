const express = require('express');
const Recipe = require('./recipies-model');

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
	Recipe.getRecipeById(req.params.recipe_id)
		.then((resource) => {
			res.json(resource);
		})
		.catch(next);
});

router.use((err, req, res, next) => {
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = router;
