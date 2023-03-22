function init() {
	var num = document.getElementById('num');
	num.value = 0;
	num.disabled="disabled";
	var oButton = document.getElementsByTagName("input");
	var op1 = "";
	var op2 = "";
	for (var i = 0; i<oButton.length; i++) {
		oButton[i].onclick = function () {
			if(!isNaN(this.value)){
				op2 = op2 + this.value;
				if(num.value == "0"){
					num.value = this.value
				}else{
					num.value =  num.value + this.value;
				}
			}else{
				var op = this.value;
				if(["+", "-", "*", "/"].indexOf(op) != -1){
					op1 = num.value +  " " + this.value + " ";
					op2 = "";
					num.value = num.value + " " + op + " ";
				}else{
					switch(op){
					case ".":
						num.value = op1 + dot_check(op2);
						break;
					case "←":
						num.value = back(num.value);
						break;
					case "c":
						num.value = "0";
						op1 = "";
						op2 = "";
						break;
					case "+/-":
						op2 = sign(op2);
						num.value = op1 + op2;
						break;
					case "=":
						op1 = "";
						var his = num.value;
						var temp = eval(num.value);
						if(temp == Infinity){
							num.value = 0;
						}else{
							arr = num.value.split(" ");
							while(arr.indexOf("*") != -1){
								m = index_m("*", arr);
								result1 = ((a * m) * (b * m)) / (m * m);
								arr.splice(index_s - 1, 3, result1);
							}
							while(arr.indexOf("/") != -1){
								m = index_m("/", arr);
								result1 = (a * m) / (b * m);
								arr.splice(index_s - 1, 3, result1);
							}
							while(arr.indexOf("-") != -1){
								m = index_m("-", arr);
								result1 = (a * m - b * m) / m;
								arr.splice(index_s - 1, 3, result1);
							}
							while(arr.indexOf("+") != -1){
								m = index_m("+", arr);
								result1 = (a * m + b * m) / m;
								arr.splice(index_s - 1, 3, result1);
							}
							if(arr.length == 1){
								var h_obj = document.getElementById("history");
								h_obj.value = h_obj.value + his + "\r\n";
								var n_obj = document.getElementById("now");
								n_obj.value = his;
								num.value = arr[0];
								h_obj.value = h_obj.value + "=" + num.value + "\r\n";
								op2 = num.value;
							}
						}
						break;
					}
				}
			}
		}
	}
}

function dot_check(n){
	if(n.indexOf(".") == -1){
		n = n + ".";
	}
	return n;
}

function acc(num1,num2,symbol){
	var str1 = num1, str2 = num2, str1Length, str2Length;
    	try {str1Length = str1.split('.')[1].length} catch (error) {str1Length = 0};
    	try {str2Length = str2.split('.')[1].length} catch (error) {str2Length = 0};
    	var m1 = Math.pow(10,Math.max(str1Length, str2Length))
    	return m1;
}

function index_m(symb, arr){
	var sy = symb;
	var ar = arr;
	index_s = ar.indexOf(sy);
	a = ar[index_s - 1];
	b = ar[index_s + 1];
	var m2 = acc(a, b, sy);
	return m2;
}

function back(n){
	if(n.length == 1){
		n = "0";
	}else{
		if(n.substr(-1) == " "){
		n = n.substr(0, n.length - 3);
		}else{
		n = n.substr(0, n.length - 1);
		}
	}
	return n;
}

function sign(n){
	if (n.indexOf("-") == -1){
		n = "-" + n;
	}else{
		n = n.substr(1, n.length);
	}
	return n;
}