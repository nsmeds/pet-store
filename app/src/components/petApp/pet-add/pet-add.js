import template from './pet-add.html';
import styles from './pet-add.scss';

export default {
    template,
    bindings: {
        add: '<',
        storeId: '<'
    },
    controller
};

controller.$inject = ['storeService', 'petService'];

function controller(stores, pets) {
    this.styles = styles;

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
            store: this.storeId
        });
        this.reset();
    };
}