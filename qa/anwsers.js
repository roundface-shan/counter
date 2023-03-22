var flag = true;
var i = 0;
var interID;
function init_qa(){
	var h_con = document.getElementById("qa_help");
	h_con.disabled="disabled";
	document.getElementById("qa").onclick = function(){
		if (flag){
			document.getElementById("qa").value = "A";
			interID = setInterval("going()", 500);
			h_con.value = h_con.value + h_text;
		}else{
			document.getElementById("qa").value = "Q";
			clearInterval(interID);
			alert(a_list[i]);
			h_con.value = "";
		}
		flag = !flag;
	}
}

function going(){
		i = a_num(a_list.length);
	return i;
}

function sleep(time){
	return new Promise((resolve) => setTimeout(resolve, time));
}

function a_num(len){
	var i = parseInt(Math.random() * len);
	return i;
}

var a_text = "别太赶了。别想了。不。不然呢？不要抱期望。要求不要太高。这是必然的，不要抗拒。不要浪费精力。不要浪费你的时间了。不要做得过火了。不用担心。车到山前必有路。答案就在你身边。大胆一点。大方一点。等等。放轻松点，慢慢来。管它呢。毫无疑问。好运将会降临。忽略了一件显而易见的事。换个角度想想。会付出代价。会感到庆幸。会很不顺利。会很顺利。会后悔的。会失去自我。会特别顺利。继续前进。结果可能让人惊讶。绝对不。肯定的。没错。木已成舟。你必须解决一些相关的问题。不会后悔的。不会失望的。得真正地努力一下。还有别的选择。你将取得成功。你说了算。你心里已经有答案了。需要合作。需要冒险。要主动。你在开玩笑吗？你做什么都没用。奇迹即将降临。千万别信。千万不能失败。全力以赴。认清现实吧。三思而后行。尚待时日。省点力气吧。时机未到。听听别人怎么说。听听专家的意见。万一错过，就没这个机会了。为什么不呢？问问你的亲人。问问自己，为什么要这么干。先做点别的。现在还说不清。现在你可以。相信你的直觉。相信你最初的想法。想得美。想想有没有机会。休息一下就好了。学会妥协。眼光长远一点。要变通。要有点耐心。要知足。要抓住问题的关键。一定会有好结果的。一笑了之。以后再说。用尽一切办法去努力。有。有可能。仔细想想再说。再等等看。障碍重重。这辈子都不可能。这不可取。这不切实际。这不值得努力。这会影响你的形象。这件事会很麻烦。这件事你说了不算。这没什么意义。这取决于你的行动。这是肯定的。没法保证。无法预测。这是在浪费金钱。没什么好结果。值得奋斗。这种事情不要告诉别人。只有一次机会。众所周知。重新想想。注意细节。做最坏的打算。不要纠结了。毫无道理。结果会让你惊喜。这不是你想要的。寻找机会就行。不要自作多情。最后一次机会。顺其自然。学会释然。别瞎折腾了。再过几年。不要忽视自己的力量。尽在掌握之中。地点不合适。不作死就不会死。当局者迷。另择吉日。时间会证明一切。并非永恒。倾听你内心的声音。如你所愿。遇上方知有。不值得。见好就收。你猜。时机尚不成熟。这难以置信。与你无关。放手。拭目以待。";
var a_list = a_text.split(/[。,？]/);

h_text = "这是“答案之书”\r\n它能帮你找到你已经有了的答案\r\n方法是按下Q键后，默念你想提出的问题\r\n问题越具体越好\r\n多默念几遍\r\n完事了按A"