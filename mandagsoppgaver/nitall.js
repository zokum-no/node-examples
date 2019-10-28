function nitall(tr, ydim, xdim) {
	let matrise = [xdim];
	let n = 0; // teller for tall fra lang matrise

	for (var i = 0; i != xdim; i++) {
		matrise[i] = new Array(ydim);
		for (var j = 0; j != ydim; j++) {
			matrise[i][j] = tr[n];
			n++;
		}
	}
	console.log(matrise);
	tr.sort(function(a, b){return a-b} );
	console.log("Minst: " + tr[0] + ", størst: " + tr[8] + ", median: "  + 
		tr[Math.floor(tr.length / 2)]);
}

tallrekke = [9,2,3,4,56,6,7,8,91];
tallrekke2 = [9,2,3,4,588,6,7,8,91];
nitall(tallrekke, 3, 3);
nitall(tallrekke2, 9, 1);
