(function () {
	window.onerror = function (msg, url, line, column, error) {
		catchError(msg, url, line, column, error);
	};

	function catchError(msg, url, line, column, error) {
		if (document.readyState !== "complete" && document.readyState !== "loaded") {
			setTimeout(function () {
				catchError(msg, url, line, column, error);
			}, 500);
			return;
		}

		var msg = "";
		msg += url ? "Url: " + url : "";
		msg += line ? " \nLine: " + line: "";
		msg += column ? " \nColumn: " + column : "";
		msg += error ? " \nError message: " + error : "";
		msg += navigator.userAgent ? " \nBrowser info: " + navigator.userAgent : "";

		// can log error if need (for example, send ajax response for save error in database).
		alert(msg);

		return true;
	}
})();