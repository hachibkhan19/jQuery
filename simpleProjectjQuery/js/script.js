function selectedNumber(value){    
    var existingNumber = $("#head").val();
    $("#head").val(existingNumber + value);
}

function clearAll(){
    $("#head").val("");
}

function deleteValue(){
    var numbers = $("#head").val();
    if(numbers != ""){
        $("#head").val(numbers.slice(0, -1))
    }

}
function calculate(){
    var result = eval($("#head").val());
    $("#head").val(result);
}
