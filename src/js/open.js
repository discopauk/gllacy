let login = document.querySelector(".login");
login.addEventListener("click", () => {
	let loginWrap = document.querySelector(".login__wrap");
	loginWrap.classList.toggle("open");
});

let search = document.querySelector(".search");
search.addEventListener("click", () => {
	let searchWrap = document.querySelector(".search__wrap");
	searchWrap.classList.toggle("open");
});

let requestBtn = document.querySelector(".map__request"),
	request = document.querySelector(".request"),
	close = document.querySelector(".close");

requestBtn.addEventListener("click", () => {
	request.classList.toggle("open");
});
close.addEventListener("click", () => {
	request.classList.remove("open");
});