import template from './stores.html';
import styles from './stores.scss';

export default {
    template,
    controller,
    controllerAs: 'storeCtrl'
};

controller.$inject = ['storeService'];

function controller(stores) {
    this.styles = styles;

    stores.get().then(returnedStores => {
        this.stores = returnedStores;
    });

    this.add = store => {
        stores.add(store)
            .then(savedStore => {
                this.stores.push(savedStore);
            });
    };

    this.remove = store => {
        stores.remove(store._id)
            .then(() => {
                const index = this.stores.indexOf(store);
                if (index > -1) this.stores.splice(index, 1);
            });
    };
}