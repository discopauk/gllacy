let arr = ["login", "search", "cart"];
arr.forEach((elem) => {
	let target = document.querySelector(`.${elem}`),
		targetWrap = document.querySelector(`.${elem}__wrap`);
	target.addEventListener("click", () => {
		targetWrap.classList.toggle("open");
		target.classList.toggle("open");
	});
});
