var customFilter = angular.module('myFilters', []);

  	// сustom filter for broken HTML tags
  	customFilter.filter('htmlToPlaintext', function() {
    	return function(text) {
      		return text ? String(text).replace(/&lt[^>]+&gt/gm, '') : '';
    	};
  	});

    // custom filter for names
  	customFilter.filter('addressToPlaintext', function() {
    	return function(text) {
      		return text ? String(text).replace(/\[(club|id)\d+\|([^\]]+)\]/g, '$2') : '';
    	};
  	});
