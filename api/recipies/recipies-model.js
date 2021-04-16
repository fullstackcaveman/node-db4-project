const db = require('../../data/db-config');

const getRecipies = () => {
	return db('recipies');
};

const getRecipeById = (recipe_id) => {
	return Promise.resolve(recipe_id);
};

module.exports = { getRecipies, getRecipeById };
