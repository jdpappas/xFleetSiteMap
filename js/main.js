function DetailsController ($scope) {
    $scope.selectTab = function(selection) {
        $scope.activeContent = selection;
    };
    $scope.detailSources = [{li:"Webpage Beschreibung", url:"content/description.html"},
                            {li:"Externe JavaScript Dateien", url:"content/externalJSfiles.html"},
                            {li:"Eingebettete JavaScript Dateien", url:"content/embeddedJSfiles.html"}];
}

