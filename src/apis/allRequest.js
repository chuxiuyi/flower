// import axios from 'axios'
// var host = "http://api.netallin.com/"
// 
// function request(data) {
// 
// 	if (data.method == 'get') {
// 		return new Promise((resolve, reject) => {
// 			console.log('request. ===================', data)
// 			axios.get(host + data.url, {
// 					params: data.params
// 				})
// 				.then((response) => {
// 					resolve(response.data);
// 				})
// 				.catch((error) => {
// 					reject(error);
// 				});
// 		})
// 	}
// 
// 	if (data.method == 'post') {
// 		return new Promise((resolve, reject) => {
// 			axios.post(host + data.url, data.params)
// 				.then((response) => {
// 					resolve(response.data);
// 				})
// 				.catch((error) => {
// 					reject(error);
// 				});
// 		})
// 	}
// }
// 
// export default {
// 	request
// }
// 
// 

import axios from 'axios'
//restful api get post put delete
var host = "http://api.netallin.com/"

function request(params) {

	if (params.method == 'get') {
		return new Promise((resolve, reject) => {
			axios.get(host + params.url, {
					params: params.params
				})
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}

	if (params.method == 'post') {
		return new Promise((resolve, reject) => {
			axios.post(host + params.url, params.params)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
	if (params.method == 'put') {
		return new Promise((resolve, reject) => {
			axios.put(host + params.url, params.params)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}

	if (params.method == 'delete') {
		return new Promise((resolve, reject) => {
			axios.delete(host + params.url, {
					data: params.params
				})
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
}

export default {
	request
}
