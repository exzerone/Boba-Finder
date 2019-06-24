import axios from 'axios';
import key from '../../../config.js';
const YELP_API_KEY = key;

const api = axios.create({
	baseURL: 'https://api.yelp.com/v3',
	headers: {
		Authorization: `Bearer ${YELP_API_KEY}`
	}
});

const getBobaShops = (userLocation) => {
	return api
		.get('/businesses/search', {
			params: {
				limit: 15,
				term: 'bubble, tea, boba, t4',
				...userLocation
			}
		})
		.then((res) =>
			res.data.businesses.map((business) => {
				let phone;
				if (business.phone) {
					phone =
						`+1(${business.phone.slice(2, 5)})` +
						business.phone.slice(5, business.phone.length);
				}
				return {
					name: business.name,
					coords: business.coordinates,
					image: business.image_url,
					price: business.price,
					id: business.id,
					closed: business.is_closed,
					phone: phone
				};
			})
		)
		.catch((error) => console.error(error));
};

const getBobadetail = (id, callback) => {
	api
		.get(`businesses/${id}`)
		.then((result) => {
			callback(null, result);
		})
		.catch((err) => {
			callback(err);
		});
};

export default {
	getBobaShops,
	getBobadetail
};
