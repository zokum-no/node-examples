class page {
  constructor(tittel, side, url) {
    this.tittel = tittel;
    this.side = side;
    this.url = url;
  }
}

// ln -s /usr/local/lib/node_modules node_modules
var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "katt",
  password: "kattabase",
  database: "katt"
});

/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM katt", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/

http.createServer(function (req, res) {
    let url = req.url;
    let webpage = "index";


    let pages = [];

    pages[0] = new page("Hovedside", "index", "/");
    pages[1] = new page("Om oss", "omoss", "/omoss");
    pages[2] = new page("Kontaktinformasjon", "kontakt", "/kontakt");
    pages[3] = new page("Siste nytt", "nyheter", "/nyheter");
    pages[4] = new page("css", "css", "/style.css");

    currentPage = pages[0];
    for (let i = 0; i != pages.length; i++) {
      if (url == pages[i].url) {
        webpage = pages[i].side;
        currentPage = pages[i];
      }
    }
  

    if (webpage == "css") {
      css(res);
    } else {
      head(res, currentPage);
      res.write("<h1>" + req.url + "</h1>");
      res.write('Hello World!'); //write a response to the client
  
      meny(res);
      innhold(res, webpage);
      fot(res);
    }
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080 

// TODO: lik head section
function head(res, currentPage) {
  res.write("<html><head><title>" 
  + currentPage.tittel + "</title></head>");
}
// TODO: meny
// TODO: innhold
// TODO: fot

function meny(res) {
  res.write("<ul>");
  menyvalg(res, "Hovedside", "/");
  menyvalg(res, "Om oss", "/omoss");
  menyvalg(res, "Kontakt", "/kontakt");
  menyvalg(res, "Siste nytt", "/nyheter");
  
  res.write("</ul>");
}

function menyvalg(res, tekst, link) {
  res.write("<li><a href=\"" + link + "\">" + tekst + "</a></li>" );
}

function innhold(res, webpage) {

  let innhold = "Dette innholdet mangler"
/*
  if (page == "omoss") {
    innhold = "Om oss";
  } else if (page == "kontakt") {
    innhold = "Pling på discord!";
  } else if (page == "index") {
    innhold = "Endelig fredag"
  }
*/

  // versjon 2.0


  res.write("\n<p class=\"innhold innhold-" + webpage + "\">" + innhold + "</p>");
}

function fot(res) {
  res.write("<p class=\"fot\">fot-tekst, hilsen fredagteamet</p>");
}

function css(res) {
  // res.write("css-data");
  lastfil(res, "style.css");

}

function db_hent(con, sporring) {
con.connect(function(err) {
  if (err) throw err;
  // con.query("SELECT * FROM katt", function (err, result, fields) {
    con.query(sporring, function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
return result;
  });
});
}


function lastfil(res, filnavn) {
  var fs = require('fs');
  res.write(fs.readFileSync(filnavn));
}
