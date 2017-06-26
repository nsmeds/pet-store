auth.$inject = [ '$rootScope', 'userService', 'ngDialog', '$state' ];

export default function auth($rootScope, userService, ngDialog, $state){

  // angular0ui-router puts this event ($stateChangeStart) on $rootScope
  $rootScope.$on('$stateChangeStart', (event, toState, toParams /*, fromState, fromParams*/  ) => {

    //console.log('$scs', toState, toParams, fromState, fromParams);

    //check if users already logged in
    if(toState.name !== 'home' && !userService.isAuthenticated()) {
      //stop ui-router from making the state change
      event.preventDefault();

      //throw up a dialog and ask user to signin/signup

      const dialog = ngDialog.open({
        //in angular, if you say templateUrl it knows to evaulate as string
        //but in ng-dialog, we need to say template and then add plain: true so it evaluates as string
        template: '<user-auth success="success"><user-auth>',
        plain: true,
        controller: [ '$scope', function($scope){
          $scope.success = function(){
            dialog.close();
            return $state.go(toState.name, toParams);
          };
        }]

      });
    }
  });
}
