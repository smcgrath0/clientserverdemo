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
}
