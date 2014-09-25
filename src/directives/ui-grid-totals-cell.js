ngGridDirectives.directive('ngTotalCell', ['$compile', '$templateCache', function ($compile, $templateCache) {
    var ngTotalsCell = {
        scope: false,
        compile: function() {
            return {
                pre: function($scope, iElement) {
                    var html = $compile($scope.col.totalCellTemplate)($scope);
                    iElement.append(html);
                }
            };
        }
    };
    return ngTotalsCell;
}]);
