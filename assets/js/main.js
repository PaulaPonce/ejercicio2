document.write("<header><h1>Users List <i class='fa fa-address-book' aria-hidden='true'></i></h1></header><section>");
var usuario = users.forEach(function(element){
  document.write("<div class='user'><i class='fa fa-user-circle-o' aria-hidden='true'></i><div class='user-info'><p><b>Name: </b>" + element.name + "</p><p><b>Address: </b>" + element.address.street + " " + element.address.suite + ", " + element.address.city +"</p></div></div>");

  //document.write("<b>Name: </b>" + element.name + "<br>");
  //document.write("<b>Address: </b>" + element.address.street + " " + element.address.suite + ", " + element.address.city + "<br><br>");
})
document.write("</section>");