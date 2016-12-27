storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
    return{
        get(){
            return $http.get(`${apiUrl}/stores`)
                .then(res => {
                    return res.data;
                    }
                );
        },

        getStore(store_id){
            return $http.get(`${apiUrl}/stores/${store_id}`)
                .then(res => res.data);
        },

        remove(id){
            return $http.delete(`${apiUrl}/stores/${id}`)
                .then(res => res.data);
        },

        add(store){
            return $http.post(`${apiUrl}/stores`, store)
                .then(res => res.data);
        }
    };
}