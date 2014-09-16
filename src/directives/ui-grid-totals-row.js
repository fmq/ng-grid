ngGridDirectives.directive('ngTotalsRow', ['$compile', '$templateCache', function ($compile, $templateCache) {
    var ngTotalsRow = {
        scope: false,
        compile: function () {
            return {
                pre: function ($scope, iElement) {
                    if (iElement.children().length === 0) {
                        iElement.append($compile($templateCache.get($scope.gridId + 'totalsRowTemplate.html'))($scope));
                    }
                }
            };
        }
    };
    return ngTotalsRow;
}]);
