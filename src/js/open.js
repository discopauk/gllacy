let services = ["login", "search", "cart"];
services.forEach(openModal);

function openModal(elem) {
	let target = document.querySelector(`.${elem}`),
		targetWrap = document.querySelector(`.${elem}__wrap`);
	target.addEventListener("click", () => {
		targetWrap.classList.toggle("open");
		target.classList.toggle("open");
	});
	document.querySelector(".close").addEventListener("click", () => {
		targetWrap.classList.remove("open");
		targetWrap.classList.add("closeModal");
	});
}

export { openModal };
