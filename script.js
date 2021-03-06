function redirect(url) {
	window.location.href = url;
}

function setClass(className, newClass) {
	var items = document.getElementsByClassName(className);
	for (var i = 0; i < items.length; i++) {
		items[i].classList.toggle(newClass);
	}
}

const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		//Toggle Nave
		nav.classList.toggle("nav-active");

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.25s ease forwards ${index / 7 + 0.1}s`;
			}
		});

		//Burger Animation
		burger.classList.toggle("toggle");
	});
};

navSlide();
