import template from './store-add.html';
import styles from './store-add.scss';

export default {
    template,
    bindings: {
        add: '<'
    },
    controller
};

controller.$inject = ['$state'];

function controller($state) {
    this.styles = styles;

    this.reset = () => {
        this.name = '';
    };

    this.reset();

    this.addStore = () => {
        this.add({
            name: this.name,
            address: {
                street: this.street,
                city: this.city,
                state: this.state
            }
        });
        this.reset();
    };

    this.cancel = () => {
        this.reset();
        $state.go('stores');
    };
}