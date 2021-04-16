exports.up = async function (knex) {
	await knex.schema
		.createTable('recipies', (tbl) => {
			tbl.increments('recipe_id');
			tbl.text('recipe_name', 128).notNullable().unique();
			tbl.timestamp('created_at').defaultTo(knex.fn.now());
		})
		.createTable('ingredients', (tbl) => {
			tbl.increments('ingredient_id');
			tbl.text('ingredient_name', 128).notNullable().unique();
			tbl.text('ingredient_unit', 50);
		})
		.createTable('steps', (tbl) => {
			tbl.increments('step_id');
			tbl.text('step_number').notNullable();
			tbl.text('step_instructions').notNullable();
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('recipe_id')
				.inTable('recipies')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('step_ingredients', (tbl) => {
			tbl.increments('step_ingredient_id');
			tbl.integer('quantity').notNullable();
			tbl
				.integer('step_id')
				.unsigned()
				.notNullable()
				.references('step_id')
				.inTable('steps')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('ingredient_id')
				.inTable('ingredients')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = async function (knex) {
	await knex.schema
		.dropTableIfExists('step_ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipies');
};
