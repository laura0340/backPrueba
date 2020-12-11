'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('nombre', 60).notNullable()
      table.string('numeroId', 20).notNullable()
      table.string('celular', 12).notNullable()
      table.string('departamento', 60).notNullable()
      table.string('ciudad', 60).notNullable()
      table.string('barrio', 60).notNullable()
      table.string('direccion', 60).notNullable()
      table.string('salario', 15).notNullable()
      table.string('otrosIngresos', 60).notNullable()
      table.string('gastosMensuales', 60).notNullable()
      table.string('gastosFinancieros', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
