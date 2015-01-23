var initializeMenu = function() {
	var filename = location.pathname.split("/")
	filename = filename[filename.length - 1]

	var files = ["index.html", "projects.html", "resume.html", "blog.html", "contact.html"]
	var ids = ["#homeButton", "#projectsButton", "#resumeButton", "#blogButton", "#contactButton"]
	var index = files.indexOf(filename)
	var id = ""

	if (index != -1) {
		id = ids[index]
	}

	if (id) {
		$(id).toggleClass("buttonSelected")
		$(id).append('<span class="selectedArrow">>></span>')
	}

	$(".navbar button").hover(
		function() {
			if (id.indexOf($(this).attr("id")) == -1) {
				$(this).toggleClass("hovering")
				$(this).append('<span class="arrow">>></span>')
				$(".arrow").toggleClass("arrowHover")
			}
		},
		function() {
			if (id.indexOf($(this).attr("id")) == -1) {
				$(this).toggleClass("hovering")
				$(this).find("span:last").remove()
				$(".arrow").toggleClass("arrowHover")
			}
		}

	);
}

initializeMenu()