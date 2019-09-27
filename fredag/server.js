var http = require('http');

http.createServer(function (req, res) {
    let url = req.url;
    let page = "index";

    let sider = [
    "index", "Hovedside", 
    "omoss", "Om oss",
    "kontakt", "Kontaktinformasjon",
    "nyheter", "Siste nytt"
  ];

    if (url == "/") {
      page = "index"
    } else if (url == "/omoss") {
      page = "omoss"
    } else if (url == "/kontakt") {
      page = "kontakt"
    }
    head(res, page, sider);
    res.write("<h1>" + req.url + "</h1>");
    res.write('Hello World!'); //write a response to the client
  
    meny(res);
    innhold(res, page);
    fot(res);

    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080 

// TODO: lik head section
function head(res, page, sider) {

  let tittel = "Fredag";
  // Gammel hardkoda versjon
  /*
  if (page == "omoss") {
    tittel = "Om oss";
  } else if (page == "kontakt") {
    tittel = "Kontaktinformasjon";
  }
*/
  let len = sider.length;
  for (let i = 0; i < len; i += 2) {
      if (sider[i] == page) {
        // tittel = sider[i + 1];
        // tittel var før inni title-tag
        res.write("<html><head><title>" + sider[i + 1] + "</title></head>");
        break;
      }
  }
}
// TODO: meny
// TODO: innhold
// TODO: fot

function meny(res) {
  res.write("<ul>");
  menyvalg(res, "Hovedside", "/");
  menyvalg(res, "Om oss", "/omoss");
  menyvalg(res, "Kontakt", "/kontakt");
  
  res.write("</ul>");
}

function menyvalg(res, tekst, link) {
  res.write("<li><a href=\"" + link + "\">" + tekst + "</a></li>" );
}

function innhold(res, page) {

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


  res.write("\n<p class=\"innhold innhold-" + page + "\">" + innhold + "</p>");
}

function fot(res) {
  res.write("<p class=\"fot\">fot-tekst, hilsen fredagteamet</p>");
}