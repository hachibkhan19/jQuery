// event listener
/*$(document).ready(function(){
    $("button").click(function(){
        var text = this.innerHTML;
        $("p").text(text+" is clicked");
    });
});
*/


$(document).ready(function(){
    $("button").on("click",function(){           // on method
        var text = this.innerHTML;
        $("p").text(text+" is clicked");
    });
});