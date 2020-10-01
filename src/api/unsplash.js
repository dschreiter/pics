import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID P0Wg9r88rqCMFv1wO1iaKat7QjJyDPwKdLEnvlI6yOY',
	},
});
