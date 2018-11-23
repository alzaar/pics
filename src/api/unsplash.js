import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 58810047b6c2af1000733176e860f3af8a521bc1a063ad9ec399201b4eb6557c'
  }
});
