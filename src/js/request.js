let request = document.querySelector(".request");

document.querySelector(".map__request").addEventListener("click", () => {
	request.classList.remove("close");
	request.classList.add("open");
});
document.querySelector(".close").addEventListener("click", () => {
	request.classList.remove("open");
	request.classList.add("close");
});
