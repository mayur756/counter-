let h=0;
let m=0;
let s=0;

function print(){
    s++;
    if(s==59){
        m++;
        s=1;
    }
    if(m==59){
        h++;
        m= 1;
        
    }
    document.getElementById("h").innerHTML=h+":";
    document.getElementById("m").innerHTML=m+":";
    document.getElementById("s").innerHTML=s+"";
}

let t=setInterval(print,700);