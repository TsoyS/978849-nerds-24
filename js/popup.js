var link = document.querySelector(".address__block__btn");
var popup = document.querySelector(".contact__modal");
var close = document.querySelector(".close");
var user__name = document.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("user__name");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal__show");

	if (storage) {
		user__name.value = storage;
		email.focus();
	} else {
		user__name.focus();
	}
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal__show");
});

form.addEventListener("submit", function(evt) {
	evt.preventDefault();
	if (!user__name.value || !email.value || !message.value) {
		evt.preventDefault();
		popup.classList.add("modal__error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("user__name", user__name.value);
		}

	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal__show")) {
			popup.classList.remove("modal__show");
		}
	}
});

function validate() {
	if (!user__name.value) {
		user__name.style.border = "2px solid #e74246";
		return false;
	} else if (!email.value) {
		email.style.border = "2px solid #e74246";
		return false;
	} else if (!message.value) {
		message.style.border = "2px solid #e74246";
		return false;
	} else {
		return form.submit();
	}
}

form.addEventListener("submit", function(evt) {
	evt.preventDefault();
	return validate();
});
