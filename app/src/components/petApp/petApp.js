import template from './petApp.html';
import styles from './petApp.scss';

export default {
    template,
    bindings: {
        storeId: '='
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
            stores.getStore(this.storeId)
                .then(store => {
                    this.pets = store.pets;
                })
                .catch (err => {
                    console.log(err);
                });
        } else {
            pets.get()
                .then(pets => {
                    this.pets = pets;
                })
                .catch (err => {
                    console.log(err);
                });
        }
        this.renderView();
    };

    this.add = pet => {
        pets.add(pet)
            .then(savedPet => {
                this.pets.push(savedPet);
            })
            .catch (err => {
                console.log(err);
            });
    };

    this.remove = pet => {
        pets.remove(pet._id)
            .then(() => {
                const index = this.pets.indexOf(pet);
                if (index > -1) this.pets.splice(index, 1);
            })
            .catch (err => {
                console.log(err);
            });
    };


    this.renderView = function() {
        this.thumbnailView = (this.viewName === 'thumbnail');
    };
}