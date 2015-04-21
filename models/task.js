var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	name: String,
	description: String,
	createdOn: {type: Date, default: Date.now()},
	modifiedOn: {type: Date} 
});

module.exports = mongoose.model('Task', taskSchema);