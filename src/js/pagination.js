const paginations = document.querySelectorAll(".pagination__item"),
	dropdownFirst = document.querySelector(".dropdown__item:nth-of-type(2)"),
	next = document.querySelector(".next"),
	prev = document.querySelector(".prev");

dropdownFirst.classList.add("current");

paginations.forEach((e) => {
	e.addEventListener("click", active);
});

function active(e) {
	let paginationsItem = e.target;

	paginations.forEach((e) => {
		e.classList.remove("active");
	});
	paginationsItem.classList.add("active");

	if (paginationsItem == paginations[0]) {
		prev.classList.remove("active");
		next.classList.add("active");
	} else if (paginationsItem == paginations[paginations.length - 1]) {
		prev.classList.add("active");
		next.classList.remove("active");
	} else {
		prev.classList.add("active");
		next.classList.add("active");
	}
}
