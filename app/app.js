
var log = console.log.bind(console);

function safeDigest(scope) {
	var dummy = scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
}


var app = angular.module('app', ['ngAnimate', 'ngTouch']);


app.controller('bodyCtrl', function ($scope, $compile) {
	window.$scope = $scope;

	$scope.arr = [1,2,3];
	$scope.jobs = jobs;

	window.curMedia = '';
	$(window).resize(function() {
		var size;
		if((size = getMedia()) != curMedia) {
			//log('change media', size)
			curMedia = size;
			//$scope.$apply('curMedia = "' + size + '"');
			if(curMedia == 'md' && $scope.view == 'profile')
				changeView('expr');

		if(curMedia == 'xs' || curMedia == 'sm')
			changeView('profile');
		else if(curMedia == 'md') {
			changeView('expr');
		}
		else if(curMedia == 'lg')
			changeView('all');
		}
		safeDigest($scope);
	})

	var $phoneNav = $('.phone-nav');

	var changeView = $scope.changeView = function(view) {
		if(curMedia == 'xs')
			showPhoneNav = false;

		if($scope.view != view) {
			$scope.view = view;
			//log('change view', view)
			var $all = $('.profile, .expr, .github, .blog');

			if(view == 'all') {
				$all.hide().removeClass('in').show();
				setTimeout(function() {
					$all.addClass('in');
				}, 100);
			}

			else {
				if(curMedia != 'md') {
					$('.profile').hide().removeClass('in');
				}
				$('.expr, .github, .blog').hide().removeClass('in');
				var $view = $('.' + view);
				$view.show();
				setTimeout(function() {
					$view.addClass('in');
				}, 100)

			}

		}
	}



	$(window).resize();
})
