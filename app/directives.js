


app.directive('dkAccordion', function () {
   return {
      scope: true,
      link: function ($scope, elem, attr) {

         $scope.curSummary = -1;
         $scope.toggleSummary = function (index) {
            $scope.curSummary = $scope.curSummary === index ? -1 : index;
         }

      }
   }
});


app.directive('dkExpr', function () {
   return {
      replace: true,
      template: '<div class="dk-expr"> ' +
                  '<div class="title"><a href="" ng-click="toggleSummary($index)">{{job.title}}</a></div> ' +
                  '<div class="desc" ng-hide="curSummary == $index" ng-bind-html="job.desc"></div> ' +
                  '<div class="summary" ng-show="curSummary == $index" ng-bind-html="job.summary"></div> ' +
               '</div>',
      link: function ($scope, elem, attr) {

      }
   }
});


