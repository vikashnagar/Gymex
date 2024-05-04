if (!localStorage.getItem("ex_count")) {
	console.log("00");
	document.write("00")
	localStorage.setItem("ex_count", "0");
}
else{
	console.log(localStorage.getItem("ex_count"))
	document.write(localStorage.getItem("ex_count"))	
}

function clearData(){
	// localStorage.setItem("ex_count", "0");
	localStorage.removeItem("ex_count");
}



function openSidebar(sts) {
	sidelist=document.getElementById("side-list")
	if (sts==1) {
		console.log(sts);
		console.log(sidelist);
		sidelist.style.left="50%"

	}else{
		console.log(sts);
		console.log(sidelist);
		sidelist.style.left="-50%"

	}
}


function startEx(x){
	console.log(x)
}