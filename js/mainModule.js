var mainModule = angular.module('MainModule', []);

mainModule.controller('MainCtrl', function ($scope) {
	$scope.onShowHomePage = function () {
		alert('show main page');
	}

	$scope.onShowAboutPage = function () {
		alert('show about page');
	}
})