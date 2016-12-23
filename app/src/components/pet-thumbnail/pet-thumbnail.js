import template from './pet-thumbnail.html';
import styles from './pet-thumbnail.scss';

export default {
    template,
    bindings: {
        pet: '=',
        storeId: '<'
    },
    controller
};

controller.$inject = ['petService'];


function controller(pets){
    this.styles = styles; 

    this.add = pet => {
        console.log('add being clickde');
        
        pets.add(pet)
            .then(savedPet => {
                this.pets.push(savedPet);
            });
    };
}
