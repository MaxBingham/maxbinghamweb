(function () {
	var STORAGE_KEY = "theme";
	var root = document.documentElement;
	var mq = window.matchMedia("(prefers-color-scheme: light)");

	function resolvedTheme() {
		var explicit = root.getAttribute("data-theme");
		if (explicit === "dark" || explicit === "light") return explicit;
		return mq.matches ? "light" : "dark";
	}

	function setStoredTheme(theme) {
		root.setAttribute("data-theme", theme);
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch (e) {}
		syncToggle();
	}

	function syncToggle() {
		var btn = document.getElementById("theme-toggle");
		if (!btn) return;
		var theme = resolvedTheme();
		btn.dataset.mode = theme;
		var isDark = theme === "dark";
		btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
		btn.setAttribute("aria-pressed", isDark ? "true" : "false");
	}

	function init() {
		var btn = document.getElementById("theme-toggle");
		if (!btn) return;
		syncToggle();
		btn.addEventListener("click", function () {
			setStoredTheme(resolvedTheme() === "dark" ? "light" : "dark");
		});

		mq.addEventListener("change", function () {
			try {
				if (!localStorage.getItem(STORAGE_KEY)) {
					root.removeAttribute("data-theme");
					syncToggle();
				}
			} catch (e) {}
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
