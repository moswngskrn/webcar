$("#form-search").submit(function( event ) {

});
function Get(url,dataType,data,success){
    $.ajax({
        type: "GET",
        url: url,
        data: data,
        success: success,
        dataType: dataType
    });
}

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

$('#customRadio1').on('click',function(){
    var textsearct = $('#input-search').val();
    var url = 'http://localhost:3003/api/mycar/cars/search';
    var data = {text:textsearct}
    Get(url,"JSON",data,function(result){
        console.log(result)
        $("#cardcon").empty()
        for(var i=0;i<result.data.length;i++){
            if($('#customRadio1')[0].checked){
                $("#cardcon").append(contentStrint(result.data[i]))
            }         
        }
    })
})
$('#customRadio2').on('click',function(){
    var textsearct = $('#input-search').val();
    var url = 'http://localhost:3003/api/mycar/cars/search';
    var data = {text:textsearct}
    Get(url,"JSON",data,function(result){
        console.log(result)
        $("#cardcon").empty()
        for(var i=0;i<result.data.length;i++){
            if(result.data[i].type=="จักรยานยนต์"){
                $("#cardcon").append(contentStrint(result.data[i]))
            }       
        }
    })
})
$('#customRadio3').on('click',function(){
    var textsearct = $('#input-search').val();
    var url = 'http://localhost:3003/api/mycar/cars/search';
    var data = {text:textsearct}
    Get(url,"JSON",data,function(result){
        console.log(result)
        $("#cardcon").empty()
        for(var i=0;i<result.data.length;i++){
            if(result.data[i].type=="จักรยาน"){
                $("#cardcon").append(contentStrint(result.data[i]))
            }       
        }
    })
})
$('#customRadio4').on('click',function(){
    var textsearct = $('#input-search').val();
    var url = 'http://localhost:3003/api/mycar/cars/search';
    var data = {text:textsearct}
    Get(url,"JSON",data,function(result){
        console.log(result)
        $("#cardcon").empty()
        for(var i=0;i<result.data.length;i++){
            if(result.data[i].type=="รถยนต์"){
                $("#cardcon").append(contentStrint(result.data[i]))
            }       
        }
    })
})
function contentStrint(dataobj){
    var status = dataobj.status?"ว่าง":"ไม่ว่าง"
    var text = '<div class="card" onClick="show(\''+dataobj._id+'\')">'+
    '<img class="card-img-top" src="'+'https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg'+'" alt="Card image cap">'+
    '<div class="card-body">'+
    '<h5 class="card-title">'+dataobj.title+'('+status+')</h5>'+
    '<p class="card-text">'+dataobj.detail+'</p>'+
    '<p>'+dataobj.where+'</p>'+
    '<h2>ราคา <span class="badge badge-danger">'+dataobj.price+'</span></h2>'+
    '<a href="/reservations/'+dataobj._id+'" class="btn btn-primary btn-block">จอง</a>'+
    '</div>'+
    '</div>'
    return text;
}

function show(id){
    window.location.href = "/showcar/"+id;
}