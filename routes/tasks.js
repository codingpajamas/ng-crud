var express = require('express');
var router = express.Router();
var Tasks = require('../models/task');

router.get('/', function(req, res){ 
	Tasks.find({},{},{}, function(err, tasks){
		if(!err){
			res.json(tasks);
		} else {
			res.json(err);
		}
	});
});

router.get('/:taskid', function(req, res){   
	Tasks.findOne({_id:req.params.taskid},{},{}, function(err, task){
		if(!err){
			res.json(task);
		} else {
			res.json(err);
		}
	});
});

router.post('/', function(req, res){
	Tasks.create({
		name: req.body.name
	},function(err, task){
		if(!err){
			res.json(task);
		} else {
			res.json('error');
		}
	})
});

router.put('/:taskid', function(req, res){ 
	Tasks.findByIdAndUpdate(req.params.taskid, { name:req.body.name }, function(err, task){
		if(!err){
			res.json(task);
		}else{
			console.log(err);
			res.json('error');
		};
	});
});

router.delete('/:taskid', function(req, res){
	Tasks.remove({
		'_id': req.params.taskid
	},function(err, task){
		if(!err){
			res.json('success');
		} else {
			res.json('error');
		}
	})
});

module.exports = router;