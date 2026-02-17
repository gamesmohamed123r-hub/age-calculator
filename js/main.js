// let d=parseInt(document.getElementById("day").value);
// let m=parseInt(document.getElementById("month").value);
// let y=parseInt(document.getElementById("year").value);

// let today=new Date();

// let currentday=today.getDate();
// let currentmonth=today.getMonth()+ 1;  //months in js starts form 0
// let currentyear=today.getFullYear();


// let ageDay=currentday-d;
// let agemonth=currentmonth-m;
// let ageyear=currentyear-y;

// if(ageDay<0){
//     agemonth--;
//     ageDay+=30;
// };
// if(agemonth<0){
//     ageyear--;
//     agemonth+=12;
// };

// document.getElementById("a").innerText= ageDay + " days";
// document.getElementById("b").innerText= agemonth + " months";
// document.getElementById("c").innerText=ageyear+ " years";


// the comments in upper are not wrong but not accurate



document.getElementById("calc").addEventListener("click",function(){
    // we capture the values the user insert in variables
    let d =parseInt(document.getElementById("day").value);
    let m = parseInt(document.getElementById("month").value)-1 // because month's starts form 0 index ;
    let y = parseInt(document.getElementById("year").value);
    
    // we bring all the values inside the date and but the user device date
    let thebirth=new Date(y,m,d);
    let today= new Date();
     
    // we minus them and it will turn to millseconds and js calculate it from utc epoch year
    let thediffrent= today - thebirth;  

    let theyearinutc=new Date(thediffrent);

    let days = theyearinutc.getUTCDate()-1; // because in UTC it will be 1-31 
    let month =theyearinutc.getUTCMonth();  // 0 month okay 
    let years= theyearinutc.getUTCFullYear()-1970;

    // then we will add the variables that have the values inside the html 


    document.getElementById("a").innerText = days+ " Days";
    document.getElementById("b").innerText= month+ " months";
    document.getElementById("c").innerText= years+ " years";

   // checking if he enter a negtaive or nothing
    if (isNaN(d) || isNaN(m) || isNaN(y)) {
    alert("Please enter all fields correctly.");
    return;
}

if (d <= 0 || m < 0 || y <= 0) {
    alert("Date values must be positive.");
    return;
}

});

// now the remove button 


document.getElementById("remo").addEventListener("click",function(){
    document.getElementById("day").value="";
    document.getElementById("month").value="";
    document.getElementById("year").value="";

    // reset the old text

    document.getElementById("a").innerText="--";
    document.getElementById("b").innerText="--";
    document.getElementById("c").innerText="--";
})