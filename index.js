var sideMenuOpen = false;
var openMenuCalled = false;
function openMenu()
{
	if(sideMenuOpen == false && openMenuCalled == false)
	{
		openSubMenu(4);
		document.getElementById("menuBar").style.visibility = "visible";
		document.getElementById("tOverlay").style.visibility = "visible";
		document.getElementById("seperatorLine").style.height = "2px";
		sideMenuOpen = true;
		openMenuCalled = true;

	}
	if(sideMenuOpen == true && openMenuCalled == false)
	{
		document.getElementById("menuBar").style.visibility = "hidden";
		document.getElementById("tOverlay").style.visibility = "hidden";
		document.getElementById("menuBar").innerHTML = "";
		sideMenuOpen = false;
	}
	openMenuCalled = false;
}


function goOldWebsite()
{
	window.location = "https://www.sites.google.com/site/nasinaprojects";
}

function goWebLocation(goLocation)
{
	switch(goLocation)
	{
		case 0:
			window.location = "/index.html"
		break;

		case 1:
			window.location = "/aboutme/index.html";
		break;

		case 2:
			window.location = "/previous_experience/index.html";
		break;

		case 50:
			window.location = "/romhacks/desertsonic/index.html";
		break;

		case 51:
			window.location = "/otherprograms/lcmgb/index.html";
		break;

		case 60:
			window.location = "/emulators/nopnes/index.html";
		break;

		case 61:
			window.location = "/emulators/nopgba/index.html";
		break;

		case 62:
			window.location = "/emulators/nopmd/index.html";
		break;

		case 63:
			window.location = "/emulators/agbe/index.html";
		break;

		case 64:
			window.location = "/emulators/ac8e/index.html";
		break;

		case 90:
			window.location = "/emublog/prologue/index.html";
		break;

		case 91:
			window.location = "/emublog/agbe1/index.html";
		break;

		case 92:
			window.location = "/emublog/agbe2/p1/index.html";
		break;

		case 93:
			window.location = "/emublog/agbe2/p2/index.html";
		break;

		case 94:
			window.location = "/emublog/agbe2/p3/index.html";
		break;

		case 95:
			window.location = "/emublog/agbe2/p4/index.html";
		break;
	}
}

function openSubMenu(menuID)
{
	switch(menuID)
	{
		case 0:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='openSubMenu(4)'>< Back</p>" + 
														   "<p id='sideMenuText' onclick='goWebLocation(90)'>  Prologue: Untitled Chip-8 Emulator</p>" +
														   "<p id='sideMenuText' onclick='goWebLocation(91)'>  Prologue 2: AGBE Revision 1</p>" + 
														   "<p id='sideMenuText' onclick='openSubMenu(20)'>&or; Chapter 1: AGBE Revision 2</p>"; 
		break;

		case 1:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='openSubMenu(4)'>< Back</p>" + 
														   "<p id='sideMenuText' onclick='openSubMenu(10)'>&or; Under Development</p>" +
														   "<p id='sideMenuText' onclick='openSubMenu(11)'>&or; Abandoned/On Hold</p>"; 
		break;

		case 2:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='openSubMenu(4)'>< Back</p>" + 
														   "<p id='sideMenuText' onclick='goWebLocation(51)'>LCM for GB Pokemon</p>";
		break;

		case 3:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='openSubMenu(4)'>< Back</p>" + 
														   "<p id='sideMenuText' onclick='goWebLocation(50)'>Desert Sonic</p>";
		break;

		case 4:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='goWebLocation(0)'>  Home</p>" +
      													   "<p id='sideMenuText' onclick='goWebLocation(1)'>  About Me</p>" +
      													   "<p id='sideMenuText' onclick='goWebLocation(2)'>  Previous Experience</p>" +
      													   "<p id='sideMenuText' onclick='openSubMenu(0)'>&or; Adventures in Emulation</p>" +
      													   "<div id='seperatorLine'></div>" +
      													   "<p id='sideMenuText' onclick='openSubMenu(1)'>&or; Emulators</p>" +
      													   "<p id='sideMenuText' onclick='openSubMenu(2)'>&or; Other Programs</p>" +
      													   "<p id='sideMenuText' onclick='openSubMenu(3)'>&or; Rom Hacks</p>";
		break;

		case 10:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='openSubMenu(1)'>< Back</p>" + 
														   "<p id='sideMenuText' onclick='goWebLocation(60)'>nopNES</p>" +
														   "<p id='sideMenuText' onclick='goWebLocation(61)'>nopGBA</p>"; 
		break;

		case 11:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='openSubMenu(1)'>< Back</p>" + 
														   "<p id='sideMenuText' onclick='goWebLocation(62)'>nopMD</p>" +
														   "<p id='sideMenuText' onclick='goWebLocation(63)'>AGBE</p>" +
														   "<p id='sideMenuText' onclick='goWebLocation(64)'>AC8E</p>";
		break;

		case 20:
			document.getElementById("menuBar").innerHTML = "<p id='sideMenuText' onclick='openSubMenu(0)'>< Back</p>" + 
														   "<p id='sideMenuText' onclick='goWebLocation(92)'>Part 1: Return to Programming</p>" +
														   "<p id='sideMenuText' onclick='goWebLocation(93)'>Part 2: Implementing ROM Loading and Registers</p>" +
														   "<p id='sideMenuText' onclick='goWebLocation(94)'>Part 3: Decoding and Implementing Opcodes</p>" +
														   "<p id='sideMenuText' onclick='goWebLocation(95)'>Part 4: Flags and their usage</p>";
		break;
	}
}