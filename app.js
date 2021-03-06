function toBMI()
{
    var weight = document.getElementById("inputWeight").value;
    var height = document.getElementById("inputHeight").value;
    var x = parseInt(weight);
    var y = parseInt(height);
    let value = x / (y**2)*(10**4)
    
    if(value <18.5)
    {
        document.getElementById("result").innerHTML = value.toFixed(2)+ " น้ำหนักน้อย";
    }else if(value <25)
    {
        document.getElementById("result").innerHTML = value.toFixed(2)+ " น้ำหนักปกติ";
    }else if(value <30)
    {
        document.getElementById("result").innerHTML = value.toFixed(2)+ " เริ่มอ้วน";
    }else if(value <35)
    {
        document.getElementById("result").innerHTML = value.toFixed(2)+ " อ้วนขั้นที่ 1";
    }else if(value <40)
    {
        document.getElementById("result").innerHTML = value.toFixed(2)+ " อ้วนขั้นที่ 2";
    }else if(value >=40)
    {
        document.getElementById("result").innerHTML = value.toFixed(2)+ " ลดน้ำหนักนะไอสัด";
    }
}
toBMI()
//------จบ BMI----
function toBMR()
{
    
        var weight = document.getElementById("inputWeight2").value;   
        var height = document.getElementById("inputHeight2").value;  
        var age = document.getElementById("inputAge").value;   
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var a = parseInt(weight);
        var b = parseInt(height);
        var c = parseInt(age);
        if(male.checked==true)
        {
            let value = 66 + (13.7*a) + (5*b) - (6.8*c)
            document.getElementById("result2").innerHTML = value.toFixed(2);
        }else if(female.checked==true){
            let value = 665 + (9.6*a) + (1.8*b) - (4.7*c)
            document.getElementById("result2").innerHTML = value.toFixed(2);
        } 
}
toBMR()