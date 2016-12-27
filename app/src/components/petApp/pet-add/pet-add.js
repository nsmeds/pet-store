import template from './pet-add.html';
import styles from './pet-add.scss';

export default {
    template,
    bindings: {
        add: '<'
    },
    controller
};

controller.$inject = ['storeService'];

function controller(stores) {
    this.styles = styles;
    this.storeName = '';

    stores.get()
        .then(returnedStores => {
            this.myStores = returnedStores;
        });

    this.reset = () => {
        this.name = '';
        this.animal = '';
    };

    this.reset();

    this.addPet = () => {
        this.add({
            name: this.name,
            animal: this.animal,
            store: this.storeName._id
        });
        this.reset();
    };
}