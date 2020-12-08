import axios from 'axios';


const api = {
    // A call to verify user token information
    loadUser: () => {
        if(localStorage.token){
            return axios.get({
                url: '/api/auth/',
                // Sending the custom header with our localstorage token
                headers: {'x-auth-token': localStorage.token}
            })
        } else return null;
    },
    // A call to register the user to the database
    register: (userData) => {
        return axios.post({
            url:'/api/user',
            data: userData
        })
    },
    // A call to check user credentials to login
    login: (userData) => {
        return axios.post({
            url:'/api/auth',
            data: userData
        })
    },
    listings: () => {

        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/list',
            params: {
              destinationId: '1506246',
              pageNumber: '1',
              checkIn: '2020-01-08',
              checkOut: '2020-01-15',
              pageSize: '25',
              adults1: '1',
              currency: 'USD',
              locale: 'en_US',
              sortOrder: 'PRICE'
            },
            headers: {
              'x-rapidapi-key': '79c829a3a0msh1799eb45de81554p1ec99cjsn8003015b6ca8',
              'x-rapidapi-host': 'hotels4.p.rapidapi.com'
            }
            // method: 'GET',
            // url: 'https://hotels4.p.rapidapi.com/locations/search',
            // params: {
            //     query: 'new york', 
            //     locale: 'en_US'},
            // headers: {
            //   'x-rapidapi-key': '79c829a3a0msh1799eb45de81554p1ec99cjsn8003015b6ca8',
            //   'x-rapidapi-host': 'hotels4.p.rapidapi.com'
            // }
        };

        return axios.request(options)
    }
}
export default api;