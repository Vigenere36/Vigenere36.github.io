var initializeMenu = function() {
	var filename = location.pathname.split("/")
	filename = filename[filename.length - 1]

	var files = ["index.html", "projects.html", "resume.html", "blog.html", "contact.html"]
	var ids = ["#homeButton", "#projectsButton", "#resumeButton", "#blogButton", "#contactButton"]
	var index = (filename.indexOf("/") == -1) ? 0 : files.indexOf(filename)
	var selectedID = ""

	if (index != -1) {
		selectedID = ids[index]
	}

	if (selectedID) {
		$(selectedID).toggleClass("buttonSelected")
		console.log(selectedID + " > .arrow")
		$(selectedID + " > .arrow").css({visibility: "visible"})
	}

	$(".navbar button").hover(
		function() {
			if (selectedID.indexOf($(this).attr("id")) == -1) {
				$(this).toggleClass("hovering")
				$("#" + $(this).attr("id") + " > .arrow").toggleClass("arrowHover")
			}
		},
		function() {
			if (selectedID.indexOf($(this).attr("id")) == -1) {
				$(this).toggleClass("hovering")
				$("#" + $(this).attr("id") + " > .arrow").toggleClass("arrowHover")
			}
		}

	);
}

initializeMenu()