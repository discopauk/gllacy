let arr = ["login", "search", "cart"];
arr.forEach((elem) => {
	document.querySelector(`.${elem}`).addEventListener("click", () => {
		document.querySelector(`.${elem}__wrap`).classList.toggle("open");
		document.querySelector(`.${elem}`).classList.toggle("open");
	});
});
