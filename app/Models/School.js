'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class School extends Model {
    static get table(){
        return 'schools'
    }
}

module.exports = School
