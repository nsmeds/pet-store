storeService.$inject = ['$http', 'apiUrl'];

export default function storeService($http, apiUrl) {
    return{
        get(){
            return $http.get(`${apiUrl}/stores`)
                .then(res => {
                    // console.log('res.data', res.data);
                    return res.data;
                    }
                );
        },

        getPets(store_id){
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