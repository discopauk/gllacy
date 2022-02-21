const paginations = document.querySelectorAll(".pagination__item"),
	dropdownFirst = document.querySelector(".dropdown__item:nth-of-type(2)");

dropdownFirst.classList.add("current");
dropdownFirst.setAttribute("aria-current", "page");

paginations.forEach((elem) => {
	elem.addEventListener("click", active);
});

function active(click) {
	const paginationsItem = click.target,
		next = document.querySelector(".next"),
		prev = document.querySelector(".prev");

	paginations.forEach((elem) => {
		elem.classList.remove("active");
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
