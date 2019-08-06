$(document).ready( startApp );

function startApp(){
  getData();
}

function getData(){
  $.ajax({
    url: "../server/getnames.json",
    method: 'get',
    dataType: 'json',
    success: handleDataFromServer,

  })
}

function handleDataFromServer( response ){
  console.log(response);
  getMoreData();
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
    url: "../server/getgrades.json",
    method: 'get',
    dataType: 'json',
    success: handleMoreDataFromServer,
  })
}


function handleMoreDataFromServer(response){
  console.log(response);
}
