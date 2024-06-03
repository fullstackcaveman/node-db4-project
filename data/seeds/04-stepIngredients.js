exports.seed = function (knex, Promise) {
	return knex('step_ingredients').insert([
		{
			ingredient_id: 1,
			quantity: 0.014,
			step_id: 2,
		},
	]);
};
