import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';


const app = angular.module('myApp', [
    components,
    services,
    uiRouter
]);

app.config(routes);

const dev = 'https://pet-store-401.herokuapp.com/api/unauth';

app.value('apiUrl', dev);

export default app;