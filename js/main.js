var initializeMenu = function() {
	var pathname = location.pathname.split("/")
	console.log(pathname)
	filename = pathname[pathname.length - 1]

	var files = ["index.html", "projects.html", "resume.html", "blog.html", "contact.html"]
	var ids = ["#homeLink", "#projectsLink", "#resumeLink", "#blogLink", "#contactLink"]
	var index = (files.indexOf(filename) == -1) ? 0 : files.indexOf(filename)
	index = (pathname.indexOf("projects") != -1) ? 1 : index
	var selectedID = ""

	if (index != -1) {
		selectedID = ids[index]
	}

	if (selectedID) {
		$(selectedID + " a").toggleClass("linkSelected")
		$(selectedID + " > .arrow").css({visibility: "visible"})
	}

	$(".navbar span").hover(
		function() {
			if (selectedID.indexOf($(this).attr("id")) == -1) {
				$("#" + $(this).attr("id") + " > .arrow").toggleClass("arrowHover")
			}
		},
		function() {
			if (selectedID.indexOf($(this).attr("id")) == -1) {
				$("#" + $(this).attr("id") + " > .arrow").toggleClass("arrowHover")
			}
		}
	)

	//Toggle class off to prevent firefox bug
	$(".navbar span").click(
		function() {
			if (selectedID.indexOf($(this).attr("id")) == -1) {
				$("#" + $(this).attr("id") + " > .arrow").toggleClass("arrowHover", false)
			}
	})
}

initializeMenu()