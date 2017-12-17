var http = require("http");
var app = http.createServer(function(req, res) {
	//console.log(req.url);

// var reqUrl = req.url;

//  switch (req.url) {
//  	case "/contact": 
//  					res.write("<h1>Contact Us</h>");
//   					res.end();
//   					break;
//   	case "/about": 
//  					res.write("<h1>about</h>");
//   					res.end();
//   					break;
//  }

	if(req.url === "/contact") {//switch
		res.write("<h1>Contact Us</h>");
  		res.end();
  	} else if (req.url === "/about") {
  		// res.write(
  		// 	var body = document.getElementsByTagName("body")[0];
  		// 	var a = document.createElement("div");
  		// 	a.textContent = req;
  		// 	a.appendChild(body););
  		// res.end();
  		res.write("about");
  		res.end();
  		console.log("request method: " + req.method, "\nrequest url: " + req.url)
  		//console.log(req)
  	} else if (req.url === "/stop") {
  		app.close(function () {console.log("server stoped");
			//res.write("<h1>404</h1\nWoops.Looks this page doesn't exist");
  			//res.end();
			}
		);
	} else {
		res.write("hello world");
  		res.end();
	}
	// res.write("hello world");
 //  	res.end();
 
});

app.listen(3000, function () {
	console.log("Server localhost 3000");
});