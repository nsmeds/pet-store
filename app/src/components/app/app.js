import template from './app.html';

export default {
    template,
    controller
};

controller.$inject = ['$state', 'userService'];

function controller($state, userService) {
    // this.gotoPets = () => $state.go('petApp');

    this.logout = () => {
        console.log('logout button called');
        userService.logout();
    };

    this.isAuthenticated = () => {
        return userService.isAuthenticated();
    };
}