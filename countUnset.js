	function countUnset(i)
{ 	//convertinos a binario
	 var num = parseInt(i).toString(2);
	 //revisamos que no falten bist para los 16
	 var res = 16-num.length;
	 //vemos cuantos son los bits en 0
	 for (var i = 0; i < num.length; i++) {
	 	if (num.charAt(i)==0) 
	 	res++;
	 }
	  return res;
}