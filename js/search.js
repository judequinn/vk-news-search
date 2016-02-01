'use strict';

var app = angular.module('newsSearch', ['ngSanitize', 'myFilters', 'angular-flexslider']);

  	app.controller('SearchController', function($scope, $http, $sce){
	    $scope.news = [];
	    $scope.fetch = function(search){
	    	// accessing VK API
			$http.jsonp("https://api.vk.com/method/newsfeed.search?q=" + search + "&extended=1&count=100&callback=JSON_CALLBACK")
		  	.success(function(response){ 
		  	$scope.news = response.response; // saving data
		  	$scope.news.splice(0,1); //removing first list item
	     });
	   };
  	}); 
