$(document).ready( startApp );

function startApp(){
  getData();
  getMoreData();
}

function getData(){
  $.ajax({
    url: "http://localhost:3005/name",
    method: 'get',
    dataType: 'json',
    success: handleNameDataFromServer,

  })
}

function handleNameDataFromServer( response ){
  for (var i = 0; i < response.length; i++){
    var nameDiv = $("<div>").text(response[i].name);
    $("body").append(nameDiv);
  }
  console.log(response);

}

// function addCanidate(){
//   $.ajax({
//     url: "../server/getnames.json",
//     method: 'get',
//     data: {
//       name: "john",
//       grade: "2",
//     },
//     dataType: 'json',
//     success:
//   })
// }

function getMoreData(){
  $.ajax({
    url: "http://localhost:3005/grade",
    method: 'get',
    dataType: 'json',
    success: handleGradeDataFromServer,
  })
}


function handleGradeDataFromServer(response){
  console.log(response);
}
