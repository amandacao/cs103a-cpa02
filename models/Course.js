'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    name: String, 
    matches: [String], 
    round: String, 
    date: String,
    team1: String, 
    team2: String, 
    score: {String},
    ft: [Int, Int]
} );

module.exports = mongoose.model( 'Course', courseSchema );
