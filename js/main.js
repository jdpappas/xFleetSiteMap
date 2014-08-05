var xFleetSiteMap = angular.module('xFleetSiteMap', []);

xFleetSiteMap.controller('MainController', ['$http', '$scope', '$log', function($http, $scope, $log) {
    // The mouse handler when clicking on the navigation panel.
    $scope.selectTabHandler = function(selection) {
        // If a previous selection is already made, then we have to reset it.
        if ($scope.activeContent) 
            $scope.activeContent.selected = false;
        // Assign the current clicked link 
        $scope.activeContent = selection;
        selection.selected = true; 
    };
       
    // The links to the source files for the tab contents.
    $scope.detailSources = [{li:"Webpage Beschreibung", selected:false},
                            {li:"Externe JavaScript Dateien", selected:false},
                            {li:"Eingebettete JavaScript Dateien", selected:false}];


    // JSON data are retrieved.
    $http.get('/content/sitemap.json').success(function(data, status, headers, config) { 
        $scope.sitemap = data; 
        
        // The method is called when a table from the top table is clicked and displays the corresponding JS files.
        $scope.retrieveJSfiles = function(subMenu){
            //if (data[index2].subMenus[index1]) 
            $scope.javaScriptFiles = subMenu.requiredJS;
            $log.log(subMenu.requiredJS);
        };
    });
    
}]);


