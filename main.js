// Given number is perfect or not
let k= parseInt(prompt("Enter Number"));
sum=0;
document.write("Perfect number-A positive integer that is equal to the sum of its proper divisors. ");
document.write("<br>");
document.write("Positive divisor is:");
for(i=1;i<k;i++){
	if(k%i==0){
		document.write(" "+i );
		sum=sum+i;	
	}
	if(sum==k){
		document.write("<br>");
		document.write("Sum of the divisor is: "+ sum);
		document.write("<br>");
		document.write("So,the given number is perfect");
		break;
	}
}
	if(sum!=k){
		document.write("<br>");
		document.write("So,the given number is not-perfect");	
	}