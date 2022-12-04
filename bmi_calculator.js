//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height) {

    var bmi = Math.round((weight) / Math.pow(height, 2));

    if (bmi < 18.5){
        return "Your BMI is " + bmi + ", so you are underweight.";
    }
    
    if (bmi <= 24.90 && bmi >=18.5){
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    
        if (bmi > 24.90){
        return "Your BMI is " + bmi + ", so you are overweight";
    }
}

var bmi = bmiCalculator(65, 1.8);
