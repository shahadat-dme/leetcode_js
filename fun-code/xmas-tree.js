// for (var i = 0; i < 8; i++) {
//     for (var j = 0; j <= i; j++) {
//        console.log("^"); 
//     }
//     console.log("<br>");
//   }


var n = 8;
for(i=1; i<=n; i++)
{ 
    //Prints trailing spaces
    for(j=i; j<n; j++)
    {
        document.write(" ");
    }
    //Prints the pyramid pattern
    for(j=1; j<=(2*i-1); j++)
    {
        document.write("*");
    }
    document.write("<br>");
}