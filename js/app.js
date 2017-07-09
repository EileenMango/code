(function(angular){
	"use strict"

	//初始化angular的模块
	angular
		.module("app", [])
		.controller("todoCtrl", ["$scope", function($scope){
			$scope.todoList = [
				{id: 1, content: "吃饭睡觉打豆豆", isCompleted: true},
				{id: 2, content: "抽烟喝酒烫头", isCompleted: false},
				{id: 3, content: "吃饭睡觉敲代码", isCompleted: true},
				{id: 4, content: "抽烟喝酒敲代码", isCompleted: false},
				{id: 5, content: "上课睡觉敲代码", isCompleted: false},
				{id: 6, content: "下课抽烟敲代码", isCompleted: false},
			];

			//1. 实现添加功能
			//这里给数据模型中新增一项来和用户输入的文本框进行双向绑定
			//那么就可以通过该项数据，随时获得用户的输入，而非dom操作来获取
			$scope.newTodo = "";
			$scope.addTodo = function(){
				var newTodo = {
					id: $scope.todoList.length == 0? 1 : $scope.todoList[$scope.todoList.length - 1].id + 1,
					content: $scope.newTodo,
					isCompleted: false
				}

				//将数据直接push到list中，由于list和界面是进行绑定了的
				//所以，可以直接修改数组，界面会自动的进行刷新，我们不需要进行任何DOM操作
				$scope.todoList.push(newTodo);
				$scope.newTodo = "";
				return false;
			}

			//2. 删除功能的实现
			$scope.delTodo = function(id){
				for(var i = 0; i < $scope.todoList.length; i++){
					var todo = $scope.todoList[i];
					if(todo.id == id){
						$scope.todoList.splice(i, 1);
					}
				}
			}

			//3. 编辑功能的实现
			// $scope.editTodo = function(id){
			// 	for(var i = 0; i < $scope.todoList.length; i++){
			// 		var todo = $scope.todoList[i];
			// 		if(todo.id == id){
			// 			//因为在元素上使用isEdit属性绑定了类样式editing
			// 			//所以在这里设置这个isEdit属性的值为true的时候
			// 			//页面上的元素会自动添加上edtiting类样式
			// 			todo.isEdit = true;
			// 		}
			// 	}
			// }

			// $scope.saveTodo = function(id){
			// 	for(var i = 0; i < $scope.todoList.length; i++){
			// 		var todo = $scope.todoList[i];
			// 		if(todo.id == id){
			// 			//因为在元素上使用isEdit属性绑定了类样式editing
			// 			//所以在这里设置这个isEdit属性的值为false的时候
			// 			//页面上的元素会自动移除edtiting类样式
			// 			todo.isEdit = false;
			// 		}
			// 	}
			// }
		}])
})(angular)