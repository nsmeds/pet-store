import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';

//plugin for 'default' routes
import defaultRoute from 'angular-ui-router-default';

//need this for $stateChanged events
import 'angular-ui-router/release/stateEvents';

import dialog from 'ng-dialog';
// import 'ng-dialog/css/ngDialog.css';
// import 'ng-dialog/css/ngDialog-theme-default.css';

//route, http config and auth setup
import http from './http';
import routes from './routes';
import auth from './auth';



const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    defaultRoute,
    angular.module('ui.router.state.events').name,
    dialog
]);

// app.filter('titleCase', () => {
//   return function titleCaseFilter(input){
//     if(!input) return '';
//     return input[0].toUpperCase() + input.slice(1);
//   };
// });


const dev = 'https://pet-store-401.herokuapp.com/api';

app.value('apiUrl', dev);

app.config(http);
app.config(routes);
app.run(auth);

export default app;
