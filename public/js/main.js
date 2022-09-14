const FORM = document.querySelector('[data-id="form"]');
const INPUT_TEXT = document.querySelectorAll('[data-id="text-input"]');
const ERROR_ICON = document.querySelectorAll('[data-id="error-icon"]');
const ERROR_MESSAGE = document.querySelectorAll('[data-id="err-msg"]');

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

FORM.addEventListener("submit", (event) => {
	INPUT_TEXT.forEach((item, idx) => {
		if (idx == 2) {
			if (validar_email(item.value)) {
				return;
			}
		}
		if (idx == 3) {
			if (item.value.length < 6) {
				ERROR_MESSAGE[idx].textContent = "Password must contain at least 6 characters"
			}
			if (item.value.length == 0) {
				ERROR_MESSAGE[idx].textContent = "Password cannot be empty"
			}
			if (item.value.length >= 6){
				return
			}
		}
		else if (idx != 2 && item.value != "") {return}
		ERROR_ICON[idx].classList.remove("hidden");
		ERROR_ICON[idx].classList.add("block");
		ERROR_MESSAGE[idx].classList.remove("hidden");
		ERROR_MESSAGE[idx].classList.add("block");
		INPUT_TEXT[idx].classList.remove("mb-4", "border-grayish-blue");
		INPUT_TEXT[idx].classList.add("border-red");
	});
	event.preventDefault();
});

INPUT_TEXT.forEach((item, idx) => {
	item.addEventListener("input", function () {
		if (idx == 2) {
			if (!validar_email(item.value)) {
				return;
			}
		}
		if (idx == 3) {
			if (item.value.length < 6) {
				ERROR_MESSAGE[idx].textContent = "Password must contain at least 6 characters"
				return
			}
			if (item.value.length == 0) {
				ERROR_MESSAGE[idx].textContent = "Password cannot be empty"
				return
			}
		}
		ERROR_ICON[idx].classList.add("hidden");
		ERROR_ICON[idx].classList.remove("block");
		ERROR_MESSAGE[idx].classList.add("hidden");
		ERROR_MESSAGE[idx].classList.remove("block");
		INPUT_TEXT[idx].classList.add("mb-4", "border-grayish-blue");
		INPUT_TEXT[idx].classList.remove("border-red");
	});
});
