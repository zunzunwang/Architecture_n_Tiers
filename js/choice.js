var direction = angular.module('choice',[]);
direction.controller('machoice',['$scope',function($scope,Data){

	$scope.bdelogoSmall = true;
	$scope.tselogoSmall = true;
	$scope.bdelogoLarge = false;
	$scope.tselogoLarge = false;

	$scope.showEtHideBDE = function(){  
		$scope.bdelogoSmall = !$scope.bdelogoSmall;
		$scope.bdelogoLarge = !$scope.bdelogoLarge;
	};

	$scope.showEtHideTSE = function(){
		$scope.tselogoSmall = !$scope.tselogoSmall;
		$scope.tselogoLarge = !$scope.tselogoLarge;
	};

}]);