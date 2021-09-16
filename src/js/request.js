import { openModal } from "./open";

let modals = ["request"];
modals.forEach(openModal);
document.querySelector(".close").addEventListener("click", () => {
	document.querySelector(".request__wrap").classList.remove("open");
	document.querySelector(".request__wrap").classList.add("closeModal");
});
