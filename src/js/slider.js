let btn1 = document.querySelector("#btn1"),
	btn2 = document.querySelector("#btn2"),
	btn3 = document.querySelector("#btn3"),
	html = document.querySelector("html");

btn2.addEventListener("click", e => {
	e.preventDefault();
	html.classList.remove("slide1");
	html.classList.remove("slide3");
	html.classList.add("slide2");
	btn1.classList.remove("current");
	btn3.classList.remove("current");
	btn2.classList.add("current");
});
btn3.addEventListener("click", e => {
	e.preventDefault();
	html.classList.remove("slide2");
	html.classList.remove("slide1");
	html.classList.add("slide3");
	btn2.classList.remove("current");
	btn1.classList.remove("current");
	btn3.classList.add("current");
});
btn1.addEventListener("click", e => {
	e.preventDefault();
	html.classList.remove("slide3");
	html.classList.remove("slide2");
	html.classList.add("slide1");
	btn3.classList.remove("current");
	btn2.classList.remove("current");
	btn1.classList.add("current");
});

