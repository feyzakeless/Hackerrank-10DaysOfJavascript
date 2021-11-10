function getGrade(score) {
    let letterGrade;
    // Write your code here
    if(score>25 && score<=30){
        letterGrade = 'A';
    }
    else if(score>20 && score<=25){
        letterGrade = 'B';
    }
    else if(score>15 && score<=20){
        letterGrade = 'C';
    }
    else if(score>10 && score<=15){
        letterGrade = 'D';
    }
    else if(score>5 && score<=10){
        letterGrade = 'E';
    }
    else if(score>=0 && score<=5){
        letterGrade = 'F';
    }
    return letterGrade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}