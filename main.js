function turnOnNav(navOn){
  if(navOn){
    document.body.setAttribute("id", "navigate")
  }
  else{
    document.body.setAttribute("id", "")
  }
}
