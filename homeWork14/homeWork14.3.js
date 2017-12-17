var http = require("http"), 
    request = require("request"),
    url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3";
var arr,
    arr2 = new Array(16),
    j = 0;

var app = http.createServer(function(req, res) {
  console.log(req.url)

	if(req.url === "/contact") {
		res.write("<h1>Contact Us</h>");
  	res.end();
  } else if (req.url === "/course") {

        request(url, function (error, response, body) {
          if (error || response.statusCode !== 200) {
              console.log("error reading data")
          } else {
              arr = JSON.parse(body);
              //console.log(arr);
              
                for(var i = 0; i < arr.length; i++) {
                  for(var key in arr[i]) {
                        console.log(key + ": " + arr[i][key]);                        
                        arr2[j] = (key + ": " + arr[i][key]);
                        j++;
                  };
                  console.log("\n")
                }              
          }//console.log(arr2);
        });

        res.write("course: \n" + arr2); //беда... перебрал массив, но все равно не
        res.end();                      // выбрасывает его на страницу(
  } else if (req.url === "/stop") {
  		app.close(function () {console.log("server stoped");
			}
		);
	} else {
		res.write("hello world");
  	res.end();
	}
});

app.listen(3000, function () {
	console.log("Server localhost 3000");
});