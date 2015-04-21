angular.module('taskApp', ['ngRoute', 'ngResource'])
	.config(function($routeProvider, $httpProvider){
		$routeProvider
			.when('/', {
				controller: 'todoCtrl',
				templateUrl: '../partials/tasks.html'
			})
			.when('/task/:taskid', {
				controller: 'detailCtrl',
				templateUrl: '../partials/detail.html'
			})
			.when('/task/:taskid/edit', {
				controller: 'editCtrl',
				templateUrl: '../partials/form.html'
			})
			.otherwise({
				redirectTo:'/'
			});
	})
	.factory('Tasks', ['$resource', function($resource){
			return $resource('/tasks/:id',{id:'@_id'},{
				'index': { method: 'GET', isArray: true },
      			'show': { method: 'GET', isArray: false },
      			'create': { method: 'POST' },
      			'update': { method:'PUT' },
      			'remove': {method:'DELETE'}
			});
		}])
	.controller('todoCtrl', function($scope, Tasks){
		Tasks.index(function(tasks){
			$scope.tasks = tasks;
		});
	})
	.controller('detailCtrl', function($scope, $routeParams, $location, Tasks){
		var taskId = $routeParams.taskid;

		Tasks.show({id:taskId}, function(task){
			$scope.taskDetail = task;
		});

		$scope.deleteTask = function(taskId){
			Tasks.remove({id:taskId}, function(result){
				if('error' != result){
					$location.url('/refresh');
				}
			});
		};
	})
	.controller('addCtrl', function($scope, $location, Tasks){
		$scope.submitTask = function(){
			Tasks.create({name:$scope.taskName}, function(data){
				if('error' != data){
					$scope.taskName = '';
					$location.url('/refresh');
				}
			})
		}
	})
	.controller('editCtrl', function($scope, $routeParams, $location, Tasks){
		var taskId = $routeParams.taskid;
		Tasks.show({id:taskId}, function(task){
			$scope.taskName = task.name;
		});

		$scope.submitTask = function(){
			Tasks.update({id:taskId}, {name:$scope.taskName}, function(result){
				if('error' != result){
					$location.url('/task/'+taskId);
				}else{
					$location.url('/');
				}
			});

			return false;
		}
	})
