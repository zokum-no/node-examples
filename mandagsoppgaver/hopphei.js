function behandlTekst(inn) {
	inn = inn.replace("hopp", "hoi");
	console.log("Tegn i strengen: " + inn.length);
	ordOppdelt = inn.split(" ");
	console.log("Ord i strengen: " + ordOppdelt.length);
	console.log("Halvparten er: " + inn.slice(0, Math.floor(inn.length / 2.0))); 
	let str = "";
	for (var i = 0; i != ordOppdelt.length; i++) {
		let ord = ordOppdelt[i];
		str += ord[0].toUpperCase();
		str += ord.slice(1, ord.length) + " ";
	}
	console.log(str);
}

behandlTekst("Hei og hopp her er det mye som skjer");
