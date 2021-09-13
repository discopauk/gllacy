let  catalog = document.querySelector(".main-menu__item:nth-of-type(1)");
catalog.addEventListener("click", e => {
	let dropdown = document.querySelector(".dropdown");
	e.preventDefault();
	dropdown.classList.toggle("open");
});