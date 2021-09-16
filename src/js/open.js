const services = ["login", "search", "cart"];
services.forEach(openModal);

function openModal(elem) {
	let target = document.querySelector(`.${elem}`),
		targetWrap = document.querySelector(`.${elem}__wrap`);
	target.addEventListener("click", () => {
		targetWrap.classList.remove("closeModal");
		targetWrap.classList.toggle("open");
		target.classList.toggle("open");
	});
}

export { openModal };
