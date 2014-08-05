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

    // JSON data about the sitemap are retrieved.
    $http.get('/content/sitemap.json').success(function(data, status, headers, config) { 
        $scope.sitemap = data; 
        
        // The method is called when a table from the top table is clicked. The purspose is to store the IDs of the used JS files.
        $scope.defineUsedJSfiles = function(filesId){
            $scope.selectedJSfilesId = filesId;
        };
    });
    // JSON data for the JS files are retrieved.
    $http.get('/content/javaScriptFiles.json').success(function(data, status, headers, config) { 
        $scope.javaScriptFiles = data; 
    });
    
}])
// The purpose of the filter is to return the JS files that are used in the chosen webpage.
.filter('filterById', function() {
    return function(javaScriptFiles, selectedJSfilesId) {
        var output = [];
        if (selectedJSfilesId) {
            // We iterate through javaScriptFiles and check if their ID appears in the list of the selected JS files IDs.
            for (var i = 0; i < javaScriptFiles.length; i++) {
                if (selectedJSfilesId.indexOf(javaScriptFiles[i].id) !== -1)
                output.push(javaScriptFiles[i]);
            }
        }
        return output;
    };
});