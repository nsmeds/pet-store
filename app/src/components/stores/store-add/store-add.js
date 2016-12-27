import template from './store-add.html';
import styles from './store-add.scss';

export default {
    template,
    bindings: {
        add: '<'
    },
    controller
};

function controller() {
    this.styles = styles;

    this.reset = () => {
        this.name = '';
    };

    this.reset();

    this.addStore = () => {
        console.log('store added');
        this.add({
            name: this.name
        });
        this.reset();
    };
}