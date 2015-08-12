var log = console.log.bind(console);

function safeDigest(scope) {
   var dummy = scope.$$phase || (scope.$root && scope.$root.$$phase) || scope.$digest();
}


var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ngSanitize', 'dkModal']);


app.controller('bodyCtrl', function ($scope, $compile) {
   window.$scope = $scope;

   $scope.arr = [1, 2, 3];
   $scope.skills = skills;
   $scope.jobs = jobs;
   $scope.repos = repos;
   $scope.blogs = blogs;

   var lastMedia, curMedia;

   $(window).resize(function () {
      var media, $views = [];
      if ((media = getMedia()) != curMedia) {
         log('change media', media)
         lastMedia = curMedia;
         curMedia = media;
         if (!lastMedia) { // initial entry
            $views.push($nav);

            if (_.contains(['xs', 'sm'], curMedia)) {
               $scope.view = 'profile';
               $views.push($profile);
               $([$expr[0], $github[0], $blog[0]]).hide().removeClass('in');// leave profile showing
            }
            else if(curMedia == 'md') {
               $scope.view = 'expr';
               $([$github[0], $blog[0]]).hide().removeClass('in');
               $views.push($profile);
               $views.push($expr);
            }
            else if(curMedia == 'lg') {
               setTimeout(function() {
                  $([$profile[0], $expr[0], $github[0], $blog[0]]).addClass('in');
               }, 100)
            }
         }
         else {
            if (_.contains(['xs', 'sm'], lastMedia) && curMedia == 'md') {
               if ($scope.view == 'profile') {
                  $scope.view = 'expr';
                  $views.push($expr);
               }
               else {
                  $views.push($profile);
               }
            }
            else if (lastMedia == 'md' && curMedia == 'lg') {
               [$expr, $github, $blog].forEach((function (v) {
                  if (!v.hasClass('in'))
                     $views.push(v);
               }))
            }
            else if (lastMedia == 'lg' && curMedia == 'md') {
               if (!$scope.view) {
                  $scope.view = 'expr';
                  $views.push($expr);
                  $([$github[0], $blog[0]]).hide().removeClass('in');
               }
               else {
                  // can't be profile cause have a view and went from md to lg with it
                  // must be expr/github/blog, need to keep which one and hide the other two
                  [$expr, $github, $blog].forEach(function(v) {
                     if(v.selector != '.' + $scope.view)
                        v.hide().removeClass('in');
                  })
               }
            }
            else if (lastMedia == 'md' && _.contains(['xs', 'sm'], curMedia)) {
               if($scope.view == 'profile') {
                  // do nothing
               }
               else {
                  $profile.hide().removeClass('in');
               }

            }

         }

         if ($views.length) {
            console.log($views)
            $views.forEach(function (v) {
               if(v != $nav)// can't have element display style on nav
                  v.show();
            })
            setTimeout(function () {
               $views.forEach(function (v) {
                  v.addClass('in');
               })
               safeDigest($scope);
            }, 100)
         }
      }
   })

   // change view for xs/sm(same) and md
   $scope.changeView = function (view) {

      if ($scope.view != view) {
         $scope.view = view;
         //log('change view', view)

         if (curMedia != 'md') {
            $profile.hide().removeClass('in');
         }
         $([$expr[0], $github[0], $blog[0]]).hide().removeClass('in');
         var $view = $('.' + view);
         $view.show();

         setTimeout(function () {
            $view.addClass('in');

            if (curMedia == 'md' && mediaChange)
               $profile.addClass('in');
         }, 100)
      }
   }


   $(window).resize();
})

