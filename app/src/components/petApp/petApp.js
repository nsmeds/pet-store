import template from './petApp.html';
import styles from './petApp.scss';

export default {
    template,
    bindings: {
        storeId: '<'
    },
    controller,
    controllerAs: 'petAppCtrl'
};

controller.$inject = ['petService', 'storeService'];

function controller(pets, stores) {
    this.$onInit = () => {
        this.styles = styles;
        this.views = ['thumbnail'];
        this.viewName = 'thumbnail';

        if(this.storeId){
            console.log('this.storeId', this.storeId);
            stores.getPets(this.storeId)
                .then(pets => {
                    console.log('pets', pets);
                    this.pets = pets;
                    console.log('this.pets', this.pets);
                });
        } else {
            pets.get()
                .then(pets => {
                    this.pets = pets;
                });
        }
        this.renderView();
    };

    this.remove = pet => {
        pets.remove(pet._id)
            .then(() => {
                const index = this.pets.indexOf(pet);
                if (index > -1) this.images.splice(index, 1);
            });
    };

    this.add = pet => {
        pets.add(pet)
            .then(savedPet => {
                this.pets.push(savedPet);
            });
    };

    this.renderView = function() {
        this.thumbnailView = (this.viewName === 'thumbnail');
    };
}