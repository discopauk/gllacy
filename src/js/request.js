import { openModal } from "./open";

const modals = ["request"],
	modalsWrap = document.querySelector(".request__wrap"),
	close = document.querySelector(".close");

modals.forEach(openModal);
close.addEventListener("click", () => {
	modalsWrap.classList.remove("open");
	modalsWrap.classList.add("closeModal");
});
