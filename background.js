var enabled = true;
addListener(
	function (details) {
		if (enabled) {
			console.log("blocking:", details.url);
		}
		return { cancel: enabled };
	},
	{ urls: ["<all_urls>"] }

	
	["blocking"]
);

