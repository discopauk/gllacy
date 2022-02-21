const priceForm = document.querySelector(".price");

priceForm.addEventListener("input", (controll) => {
	let price = controll.target;
	priceForm.style.setProperty(`--${price.id}`, +price.value);
});
