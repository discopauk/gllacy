try {
	let	priceForm = document.querySelector(".price");

	priceForm.addEventListener("input", e => {
		let price = e.target;
		priceForm.style.setProperty(`--${price.id}`, +price.value);
	});
} catch {
	console.log("not catalog");
}