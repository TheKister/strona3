const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const navLink = document.querySelectorAll('.nav__link')
const nav = document.querySelector('.nav');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	navLink.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active');
		});
	});
};

const showButton = () => {
	navBtn.classList.remove('is-active');
}

navLink.forEach((item) => {
	item.addEventListener('click', (showButton))
});


navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
