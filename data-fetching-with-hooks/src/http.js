import axios from 'axios';

const noopPromise = {
  then: () => noopPromise,
  catch: () => noopPromise,
};

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);

    return noopPromise;
  }
)

export default instance;