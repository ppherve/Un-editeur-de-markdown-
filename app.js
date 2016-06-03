
var md = localStorage.getItem("code");
var ta = document.getElementById("code");
var htmlPreview = document.getElementById("rendu");
ta.value = md;
var editor = CodeMirror.fromTextArea(ta, {
    lineNumbers: true
  });

setInterval(function changeText(){
	var d = editor.getValue();
	htmlPreview.innerHTML = marked(d);
	localStorage.setItem("code",d);
},1000);




