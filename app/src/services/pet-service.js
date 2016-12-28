petService.$inject = ['$http', 'apiUrl'];

export default function petService($http, apiUrl) {
    return{
        get(storeId){
            if(storeId){
                return $http.get(`${apiUrl}/stores/${storeId}/`)
                    .then(res => res.data)
                    .catch (err => {
                        console.log(err);
                });
            } else {
                return $http.get(`${apiUrl}/pets`)
                    .then(res => res.data)
                    .catch (err => {
                        console.log(err);
                    });
            }
        },

        remove(id){
            return $http.delete(`${apiUrl}/pets/${id}`)
                .then(res => res.data)
                .catch (err => {
                    console.log(err);
                });
        },

        add(pet){
            return $http.post(`${apiUrl}/pets`, pet)
                .then(res => res.data)
                .catch (err => {
                    console.log(err);
                });
        }
    };
}