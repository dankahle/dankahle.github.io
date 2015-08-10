


app.directive('dkAccordion', function () {
   return {
      scope: true,
      link: function ($scope, elem, attr) {
         log('accord', $scope)
         window.$scopeAccord = $scope;

         $scope.curSummary = -1;

         $scope.toggleSummary = function (index) {
            $scope.curSummary = $scope.curSummary === index ? -1 : index;
            log($scope.curSummary)
         }

      }
   }
});


app.directive('dkExpr', function () {
   return {
      replace: true,
      template: '<div class="dk-expr"> ' +
                  '<div class="title"><a href="" ng-click="toggleSummary($index)">{{job.title}}</a></div> ' +
                  '<div class="desc" ng-hide="curSummary == $index">{{job.desc}}</div> ' +
                  '<div class="summary" ng-show="curSummary == $index">{{job.summary}}</div> ' +
               '</div>',
      link: function ($scope, elem, attr) {
         log('child', $scope)
         window.$scopeChild = $scope;

      }
   }
});


