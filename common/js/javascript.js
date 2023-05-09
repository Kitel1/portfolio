// clicks on the button, scroll to the top of the document

function topFunction( ) {
    
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//点数代わる
var surname=['阿部','加藤','佐藤','田中','中川','林','松本','矢部','和田','山田','鈴木'];
var point=[65, 48, 36, 80, 100, 94, 72, 67, 93, 50, 100];
function calc(x){
    if(x==3){ sum = 0;
        txt = "<table>";
        for ( i = 0; i < surname.length; i++ ){
            sum += Number(point[i]);
        }
        txt += "<tr><td>合計</td><td>" + sum + "</td></tr>"
        avr = sum / point.length;
        avr = ( avr  - avr  % 1) ;  
        txt += "<tr><td>平均</td><td>" + avr + "</td></tr>"
        txt += "</table>";
        document.getElementById("sum_result").innerHTML=txt;
    }   
    else if(x==2){
        document.getElementById("first_show").style.display= "none";
        var check = true;
        while( check ){
            check = false;
            for( i = 0; i < point.length - 1; i++ ){
                if( point[i] < point[i+1] ){
                    tmp = point[i];
                    point[i] = point[i+1];
                    point[i+1] = tmp;
                    tmp = surname[i];
                    surname[i] = surname[i+1];
                    surname[i+1] = tmp;
                    document.getElementById(i).innerHTML=surname[i];
                    document.getElementById(i+1).innerHTML=surname[i+1];
                    check = true;
                }
            }
        }
        txt = "<table>";
        for ( i = 0; i < surname.length; i++ ){
        txt = txt + "<tr><td>" + surname[i] + "</td><td>" + point[i]  + "</td></tr>";
    }
    txt= txt + "</table>";
        document.getElementById("result").innerHTML = txt;
    }
    else if(x==1) {
        document.getElementById("first_show").style.display= "none";
        var check = true;
        while( check ){
            check = false;
            for( i = 0; i < point.length - 1; i++ ){
                if( point[i] >  point[i+1] ){
                tmp = point[i];
                point[i] = point[i+1];
                point[i+1] = tmp;
                tmp = surname[i];
                surname[i] = surname[i+1];
                surname[i+1] = tmp;
                document.getElementById(i).innerHTML=surname[i];
                document.getElementById(i+1).innerHTML=surname[i+1];
                check = true;    
                }
            }
        }   
        txt = "<table>";
        for ( i = 0; i < surname.length; i++ ){
            txt = txt + "<tr><td>" + surname[i] + "</td><td>" + point[i]  + "</td></tr>";
        }
        txt= txt + "</table>";
        document.getElementById("result").innerHTML = txt;
    }
} 

function Change_value(){
    point[document.getElementById("text_name").value*(-1)-1]=document.getElementById("data1").value;
    document.getElementById(document.getElementById("text_name").value).innerHTML=document.getElementById("data1").value;
}    