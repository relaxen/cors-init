const getData = (function () {
	'use strict';
	return async (customEvent) => {
		const [districtId, realtyComplexId, flateId] = customEvent.detail.ids;

		const districtNode = document.getElementById(districtId);
		const realtyComplexNode = document.getElementById(realtyComplexId);
		const flateNode = document.getElementById(flateId);

		let headers = new Headers();

		headers.append('Content-Type', 'text/javascript');

		var opt = {
			mode: 'cors',
			method: 'GET',
			headers,
		};
		try {
			const result = fetch('https://lk.vectoranalytics.ru/test.php', opt);
			const { district, flate } = result.estimates;
			districtNode.innerHTML = district;
			flateNode.innerHTML = flate;
			realtyComplexNode.innerHTML = result.estimates['realty complex'];
		} catch (error) {
			console.warn(error);
		}
	};
})();
window.addEventListener('getData', getData);
