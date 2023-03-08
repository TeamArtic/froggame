window.addEventListener("load", function() {

var rana = document.getElementById("rana");
		var rana1 = "../img/dona.gif";
		var rana2 = "../img/saltar.gif";
		var isRana1 = true;
		var isJumping = false;

		rana.addEventListener("click", function() {
			if (!isJumping) {
				isJumping = true;
				rana.classList.add("jump");
				if (isRana1) {
					rana.src = rana2;
					isRana1 = false;
				} else {
					rana.src = rana1;
					isRana1 = true;
				}
				setTimeout(function() {
					rana.classList.remove("jump");
					rana.src = rana1;
					isJumping = false;
				}, 1000);
			}
		});
});