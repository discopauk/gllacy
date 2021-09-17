const btns = document.querySelectorAll("#btn1, #btn2, #btn3"),
	html = document.querySelector("html");

btns.forEach((e) => {
	e.addEventListener("click", slider);
});

function slider(e) {
	let btnsItem = e.target,
		slide = btnsItem.dataset.slide;

	btns.forEach((e) => {
		html.className = "";
		e.classList.remove("slider");
	});
	btnsItem.classList.add("slider");
	html.classList.add(slide);
}
