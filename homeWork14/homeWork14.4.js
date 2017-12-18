//печаль-буда в том, что при обновлении создаются новые таблицы(
console.clear();

var but = document.getElementById("but"),
	xhr = new XMLHttpRequest(),
	//tr = new Array(4),
	url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
	//jsonObj = [];
but.addEventListener("click", xhRequest);


function xhRequest(event) {
		xhr.open('GET', url, false);
		xhr.send();

		if (xhr.status != 200) {
  			console.log( xhr.status + ': ' + xhr.statusText );
		} else {
  			var arr = JSON.parse(xhr.responseText);
  			//console.log(arr);
		}

var div = document.getElementsByTagName("div")[1];
div.textContent = "";
//div.removeChild(table);
var table = document.createElement("table");
table.setAttribute("border", "3px solid lightgray");
table.setAttribute("cellpadding", "5px");
table.style.borderCollapse = "collapse";
table.style.textAlign = "center";

div.appendChild(table);

		for (var i = 0; i < arr.length; i++) {
			
			var tr = document.createElement("tr");
			table.appendChild(tr);
			
			for (var key in arr[i]) {
						td = document.createElement("td");
						td.innerHTML = arr[i][key];
						tr.appendChild(td)
						
				//console.log(key + ": " + arr[i][key])
			}
			//console.log("\n");
		}

var tim = new Date();
var time = document.getElementById("time");
time.innerHTML = "update: " + tim.getHours() + ":" + tim.getMinutes() + ":" + tim.getSeconds();
}