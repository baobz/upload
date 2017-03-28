var app = angular.module('uploadApp', ['angularFileUpload']);//注入的文件上传服务
app.controller('uploadCtrl', ['$scope','$fileUploader', function($scope,$fileUploader) {
	var vm = $scope.vm ={};
	vm.uploader = $fileUploader.create({
		scope: $scope,
		url: '/api/upload',
		autoUpload: true, //开始自动上传
		formData: [
			{key: 'value'}
		],
		filters: [		//过滤器,可以对每个文件进行处理
			function(item) {
				console.info('filter1', item);
				return true;
			}
		]
	})
}])
