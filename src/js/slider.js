let btns = document.querySelectorAll("#btn1, #btn2, #btn3"),
	html = document.querySelector("html");

btns.forEach((e) => {
	e.addEventListener("click", current);
});

function current(e) {
	let btnsItem = e.target,
		slide = btnsItem.dataset.slide;

	btns.forEach((e) => {
		html.className = "";
		e.classList.remove("current");
	});
	btnsItem.classList.add("current");
	html.classList.add(slide);
}
