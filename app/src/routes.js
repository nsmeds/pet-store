routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'home',
        url: '/',
        component: 'home'
    });

    $stateProvider.state({
        name: 'stores',
        url: '/stores',
        component: 'stores'
    });

    $stateProvider.state({
        name: 'stores.pets',
        url: '/:store_id',
        resolve: {
            storeId: ['$transition$', t => {
                return t.params().store_id;
            }]
        },
        component: 'petApp'
    });

    $urlRouterProvider.otherwise('/');
}