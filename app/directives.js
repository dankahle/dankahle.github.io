


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
      template: '<article class="dk-expr"> ' +
                  '<a class="title" href="" ng-click="toggleSummary($index)">{{job.title}}</a>' +
                  '<div class="city-date-wrapper"> ' +
                  '<span class="city">{{job.city}}</span> ' +
                  '<span class="dates">{{job.dates}}</span> ' +
                  '</div> ' +
                  '<div class="desc" ng-hide="curSummary == $index" ng-bind-html="job.desc"></div> ' +
                  '<div class="summary" ng-show="curSummary == $index" ng-bind-html="job.summary"></div> ' +
               '</div>',
      link: function ($scope, elem, attr) {

      }
   }
});


