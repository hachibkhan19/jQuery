// $(document).ready(function(){
//     $("button").click(function(){
//         var value = $("input").val();
//         if(value !=""){
//             alert("Congrats");
//         }
//         else{
//             alert("Enter your uname or password");
//         }
//     });
// });

$(document).ready(function(){
    $("#btn").click(function(){
        var value1 = $("#pwd1").val();
        var value2 = $("#pwd2").val();
        
        if(value1 != "" && value2 != ""){
            if(value1 == value2){
                alert("Successfully login");
            }
            else{
                alert("Mismatch");
            }
        }
        else{
            alert("please enter your password");
        }
    });
});