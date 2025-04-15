//90 >=A
//80>=B
//70>=C
//60>=D
//F


function calculategrade(marks){
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else if(marks>=60){
    console.log("Grade D");
}
else{
    console.log("Fail");
}

}
calculategrade(40);


//or

function calculategrade1(score){
    if(score>=90){
        return "A"
    }
    else if(score>=80){
        return "B"
    }
    else if(score>=70){
        return "C"
    }
    else if(score>=60){
        return "D"
    }
    else{
        return "E" 
     }
    
    }
    let result=calculategrade1(90);
    console.log(result);
