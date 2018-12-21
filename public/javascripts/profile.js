$(document).ready(function(){
    var textsearct = $('#input-search').val();
    var url = 'http://localhost:3003/api/mycar/cars/search';
    var data = {text:textsearct}
    Get(url,"JSON",data,function(result){
        console.log(result)
        $("#cardcon").empty()
        for(var i=0;i<result.data.length;i++){
            $("#cardcon").append(contentStrint(result.data[i]))    
        }
    })
})