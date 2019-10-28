function firetall(a, b, c, d) {
	let tall = [4];
	tall[0] = a;
	tall[1] = b;
	tall[2] = c;
	tall[3] = d;
	tall.sort();
	console.log("Minst: " + tall[0] + ", størst: " + tall[3] + ", gjennomsnitt: " + ( (a+b+c+d) / 4.0));
}
firetall(1,2,3,4);
firetall(11,11,80,90);
firetall(2,4,9,12);
