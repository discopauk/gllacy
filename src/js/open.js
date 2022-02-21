const services = ["login", "search", "cart"],
	toggle = document.querySelector(".toggle"),
	dropdown = document.querySelector(".dropdown");

services.forEach(openModal);

function openModal(elem) {
	const target = document.querySelector(`.${elem}`),
		targetWrap = document.querySelector(`.${elem}__wrap`);
	target.addEventListener("click", () => {
		targetWrap.classList.remove("closeModal");
		targetWrap.classList.toggle("open");
		target.classList.toggle("open");
		targetWrap.querySelector("input").focus();
	});
}

toggle.addEventListener("click", () => {
	toggle.classList.toggle("active");
	document.body.classList.toggle("menuOpen");
});
dropdown.addEventListener("click", () => {
	dropdown.classList.add("open");
});

export { openModal };
