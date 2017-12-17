var fs = require("fs"),
	serv = require("http"),
	val = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

for (var i = 0; i < 1000; i++) {

	fs.appendFile("for15HomeWork.txt", val + "\n", function(err) {
		if(err) {
			throw err;
			console.log(err);
		}
	})
}

serv.createServer(function(req, res) {
	if(req.url === "stream") {
		fs.createReadStream("for15HomeWork.txt").pipe(res);
	}else{
		fs.readFile("for15HomeWork.txt", function(err, data) {
			if(err) {
				console.log("error" + err);
			}else{
				res.write(data);
				res.end();
			}
		})
	}
}).listen(3000, function() {
	console.log("server started");
});