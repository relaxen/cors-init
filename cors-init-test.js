const Swiper = (function () {
	'use strict';
	return (districtId, realtyComplexId, flateId) => {
		const districtNode = document.getElementById(districtId);
		const realtyComplexNode = document.getElementById(realtyComplexId);
		const flateNode = document.getElementById(flateId);
		console.log(districtNode);
		console.log(realtyComplexNode);
		console.log(flateNode);
	};
})();
window.addEventListener('getData', Swiper);
