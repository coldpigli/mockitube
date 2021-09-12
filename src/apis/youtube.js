import axios from 'axios';

const KEY = 'AIzaSyAEh5S9F84p6xtlOCUVLH4nriXL7Hn5glQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        type: 'video',
        part: 'snippet',
        maxResults: '10',
        key: KEY
    }
});