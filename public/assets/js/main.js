
	function showSection(sectionId) {
		const currentSection = document.querySelector('.container.show');
		currentSection.classList.remove('show');
		document.getElementById(sectionId).classList.add('show');
	}

	function backToWelcome() {
		const currentSection = document.querySelector('.container.show');
		currentSection.classList.remove('show');
		document.getElementById('welcome').classList.add('show');
	}
