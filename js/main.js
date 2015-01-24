var initializeMenu = function() {
	var pathname = location.pathname.split("/")
	filename = pathname[pathname.length - 1]

	var files = ["index.html", "projects.html", "resume.html", "blog.html", "contact.html"]
	var ids = ["#homeButton", "#projectsButton", "#resumeButton", "#blogButton", "#contactButton"]
	var index = (files.indexOf(filename) == -1) ? 0 : files.indexOf(filename)
	console.log(index)
	var selectedID = ""

	if (index != -1) {
		selectedID = ids[index]
	}

	if (selectedID) {
		$(selectedID).toggleClass("buttonSelected")
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
	)

	//Toggle class off to prevent firefox bug
	$(".navbar button").click(
		function() {
			if (selectedID.indexOf($(this).attr("id")) == -1) {
				$(this).toggleClass("hovering", false)
				$("#" + $(this).attr("id") + " > .arrow").toggleClass("arrowHover", false)
			}
	})
}

initializeMenu()