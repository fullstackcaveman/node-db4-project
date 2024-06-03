exports.seed = function (knex, Promise) {
	return knex('recipies').insert([
		{ recipe_name: 'Spaghetti Bolognese' },
		{ recipe_name: 'Chicken Marsalla' },
	]);
};
