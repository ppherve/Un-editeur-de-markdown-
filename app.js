
var md = localStorage.getItem("code");
var ta = document.getElementById("code");
ta.value = md;
var editor = CodeMirror.fromTextArea(ta, {
    lineNumbers: true
  });

//setInterval(function() {
//	var d = editor.getValue();
//	console.log(d);
//},1000);

setInterval(function changeText(){
	var d = editor.getValue();
	document.getElementById("rendu").innerHTML = marked(d);
	localStorage.setItem("code",d);
},1000);




