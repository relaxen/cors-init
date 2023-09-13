const getData = (function () {
	'use strict';
	return (customEvent) => {
		const [districtId, realtyComplexId, flateId] = customEvent.detail.ids;

		const districtNode = document.getElementById(districtId);
		const realtyComplexNode = document.getElementById(realtyComplexId);
		const flateNode = document.getElementById(flateId);

		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

		var opt = {
			mode: 'cors',
			method: 'GET',
			headers,
		};
		fetch('https://lk.vectoranalytics.ru/test.php', opt).then((response) => {
			console.log(response);
		});

		console.log(districtNode);
		console.log(realtyComplexNode);
		console.log(flateNode);
	};
})();
window.addEventListener('getData', getData);
