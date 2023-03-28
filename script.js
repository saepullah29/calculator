function insert(num){
			document.form.textView.value = document.form.textView.value+num;
}
	function C(){
		document.form.textView.value = "";
}
	function Del(){
		var x = document.form.textView.value;
		document.form.textView.value = x.substring(0, x.length-1)
}

	function equal(){
		var x = document.form.textView.value;
		if(x == ""){
			alert('MASUKAN ANGKA TERLEBIH DAHULU!')
		}
		if(x){
			document.form.textView.value = eval (x);
		}
}