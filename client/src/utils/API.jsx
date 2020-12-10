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

    cityId: async (cityId) => {
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/locations/search',
            params: {
                query: 'new york', 
                locale: 'en_US'},

            headers: {
              'x-rapidapi-key': '79c829a3a0msh1799eb45de81554p1ec99cjsn8003015b6ca8',
              'x-rapidapi-host': 'hotels4.p.rapidapi.com'
            }
        }; 

         return await axios.request(options);
            
    },

    listings: (cityId, checkOut, checkIn, adults) => {

        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/list',
            params: {
              destinationId: '1506246',
              pageNumber: '1',
              checkIn: checkIn,
              checkOut: checkOut,
              pageSize: '25',
              adults1: adults,
              currency: 'USD',
              locale: 'en_US',
              sortOrder: 'PRICE'
            },
            // url: 'https://hotels4.p.rapidapi.com/properties/get-details',
            // params: {
            //   id: '424023',
            //   locale: 'en_US',
            //   currency: 'USD',
            //   checkOut: '2020-01-07',
            //   adults1: '1',
            //   checkIn: '2020-01-08'
            // },
            // params: {
            //     id: cityId,
                // destinationId: cityId,
                // pageNumber: '1',
                // pageSize: '25',
            //     adults1: adults,
            //     currency: 'USD',
            //     locale: 'en_US',
            //     sortOrder: 'PRICE',
            //     checkOut,
            //     checkIn
            //   },
            // params: {
            //     id: cityId,
            //     locale: 'en_US',
            //     currency: 'USD',
            //     checkOut,
            //     adults1: adults,
            //     checkIn: checkIn
            //   },
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
    },

    hotels1: async () => {
        const options = {
            method: 'GET',
            url: 'https://hotels-com-free.p.rapidapi.com/srle/listing/v1/brands/hotels.com',
            params: {
                checkIn: '2021-01-27',
                checkOut: '2021-01-28',
                lat: '37.788719679657554',
                lon: '-122.40057774847898',
                locale: 'en_US',
                rooms: '1',
                currency: 'USD',
                pageNumber: '1'
            },
            headers: {
                'x-rapidapi-key': '79c829a3a0msh1799eb45de81554p1ec99cjsn8003015b6ca8',
                'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
            }
        }
    }
}
export default api;