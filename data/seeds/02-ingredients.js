exports.seed = function (knex, Promise) {
	return knex('ingredients').insert([
		{ ingredient_name: 'olive oil', ingredient_unit: 'oz' },
		{ ingredient_name: 'chicken', ingredient_unit: 'lbs' },
		{ ingredient_name: 'pasta', ingredient_unit: 'lbs' },
		{ ingredient_name: 'mushrooms', ingredient_unit: 'oz' },
	]);
};
