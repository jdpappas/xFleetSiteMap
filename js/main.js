var xFleetSiteMap = angular.module('xFleetSiteMap', []);

xFleetSiteMap.controller('DetailsController', ['$scope', function($scope) {
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
    $scope.detailSources = [{li:"Webpage Beschreibung", url:"content/description.html", selected:false},
                            {li:"Externe JavaScript Dateien", url:"content/externalJSfiles.html", selected:false},
                            {li:"Eingebettete JavaScript Dateien", url:"content/embeddedJSfiles.html", selected:false}];
}]);

