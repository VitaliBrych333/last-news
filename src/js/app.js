import { API } from './components/api';
import setSources from './components/setSources';
import RequestsFactory from './components/factoryRequests';
import '../sass/style.sass';

async function getSources() {
    document.querySelector('#search').disabled = true;
	const language = document.querySelector('input[name="language"]:checked').value;
	const newRequest = new RequestsFactory();
	const response = await newRequest.createRequest(`https://newsapi.org/v2/sources?language=${language}&apiKey=${API}`, 'GET').sendRequest();

	if (response.ok === false) {
		import(/* webpackChunkName: "lazyLoaderError" */ './components/lazyLoaderError').then(module => {
			const Error = module.default;
			let newError = new Error(responseNews.statusText);
			newError.showError();
            newError.hideError();
		});
	} else {
		const myJson = await response.json();
		const sources = myJson.sources;

		if (sources.length > 100) {
			import(/* webpackChunkName: "lazyLoaderError" */ './components/lazyLoaderError').then(module => {
				const Error = module.default;
			    let newError = new Error('Error. You got more than 100 sources');
			    newError.showError();
                newError.hideError();
			});
		} else {
			setSources(sources);
		}
	}
}

window.onload = () => {
    document.querySelectorAll('input[name="language"]').forEach(item => item.addEventListener('click', getSources));
};
