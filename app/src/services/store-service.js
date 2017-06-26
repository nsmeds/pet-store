storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
    return{
        get(){
            return $http.get(`${apiUrl}/stores`)
                .then(res => {
                    return res.data;
                    }
                )
                .catch (err => {
                    console.log(err);
                });
        },

        getStore(store_id){
            return $http.get(`${apiUrl}/stores/${store_id}`)
                .then(res => res.data)
                .catch (err => {
                    console.log(err);
                });
        },

        remove(id){
            return $http.delete(`${apiUrl}/stores/${id}`)
                .then(res => res.data)
                .catch (err => {
                    console.log(err);
                });
        },

        add(store){
            return $http.post(`${apiUrl}/stores`, store)
                .then(res => res.data)
                .catch (err => {
                    console.log(err);
                });
        }
    };
}