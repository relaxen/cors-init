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
			const result = await fetch('https://lk.vectoranalytics.ru/test.php', opt);
			const { district, flate } = result.estimates;
			districtNode.innerHTML = district;
			flateNode.innerHTML = flate;
			realtyComplexNode.innerHTML = result.estimates['realty complex'];
		} catch (error) {
			districtNode.innerHTML = `Процесс анализа и оценки доступности и качества различных инфраструктурных объектов, таких как транспортная сеть, медицинские учреждения, торговые центры, образовательные учреждения, культурные и спортивные объекты и другие элементы, которые влияют на комфорт и стоимость жилья в данном районе`;
			flateNode.innerHTML = `Процесс анализа и оценки различных аспектов связанных с жилым комплексом. 
В рамках этой оценки учитываются факторы, такие как качество строительства, проектная документация, инженерные системы, доступность к средствам коммуникации, безопасность, услуги управления и обслуживания, наличие парков, площадок для отдыха и других удобств.`;
			realtyComplexNode.innerHTML =
				'Процесс определения текущей рыночной цены конкретной квартиры. Он основывается на множестве факторов, таких как размер квартиры, расположение, состояние, уровень спроса на рынке, анализ сравнимых продаж и другие релевантные данные.';
			console.warn(error);
		} finally {
			window.dispatchEvent(new CustomEvent('domWasUpdated'));
		}
	};
})();
window.addEventListener('getData', getData);
