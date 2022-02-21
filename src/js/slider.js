const btns = document.querySelectorAll("#btn1, #btn2, #btn3"),
	html = document.querySelector("html");

btns.forEach((elem) => {
	elem.addEventListener("click", slider);
});

function slider(btn) {
	let btnsItem = btn.target,
		slide = btnsItem.dataset.slide;

	btns.forEach((btnElem) => {
		html.className = "";
		btnElem.classList.remove("slider");
	});
	btnsItem.classList.add("slider");
	html.classList.add(slide);
}
