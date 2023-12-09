import axios from 'axios';
import { apikeys } from '../constants';

const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apikeys}`;




// person
const personDetailsEndpoint = (id: any)=> `${apiBaseUrl}/person/${id}?api_key=${apikeys}`;
const personMoviesEndpoint = (id: any)=> `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apikeys}`;

const apiCall = async (endpoin: string, params: undefined) => {
    const option = {
        method: 'Get',
        url: endpoint,
        param: params ? params : {}
    }
    try {
        const response = await axios.request(option);
        return response.data;
    } catch (error) {
        console.log('error:', error);
        return;
    }
}


// person screen apis
export const fetchPersonDetails = (personId: any)=>{
    return apiCall(personDetailsEndpoint(personId));
}
export const fetchPersonMovies = (personId: any)=>{
    return apiCall(personMoviesEndpoint(personId));
}


