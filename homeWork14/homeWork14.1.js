
var Event = require("events").EventEmitter,
			connect = new Event(), 
			disconnect = new Event(),
			time = new Date();
			//timeOn = 0,
			//timeOff = 0;

connect.on("userConnect", function (userName) {
	console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " connect " + userName);
	//timeOn = new Date(); //время подключения
});

disconnect.on("userDisconnect", function (userName, timeDisconnect) {
	setTimeout(function () {
	console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " " + userName + " is disconnect")
}, timeDisconnect);
	//timeOff = new Date(); //время отключения
});



connect.emit("userConnect", "Andy");
connect.emit("userConnect", "Jesus");

// для предотвращения отключения, если есть повторное подключение в теч 10 секунд
// if((timeOff.getTime - timeOn.getTime) > 10000) {
// 	disconnect.emit("userDisconnect", this.user, 5000);
// } else {
// 	disconnect.removeListener("userDisconnect", this.user, 5000);
// };

disconnect.emit("userDisconnect", "Andy", 5000);//время считывается сразу, после задержки выдает время считывания(

connect.emit("userConnect", "God");
/////////////////////////////////////////