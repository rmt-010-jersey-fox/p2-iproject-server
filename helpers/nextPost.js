function nextpos(beforepost){
  if(beforepost == 1 || beforepost == 2){
    return 9
  } else if(beforepost == 3 || beforepost == 4){
    return 10
  } else if(beforepost == 5 || beforepost == 6){
    return 11
  } else if(beforepost == 7 || beforepost == 8){
    return 12
  } else if(beforepost == 9 || beforepost == 10){
    return 13
  } else if(beforepost == 11 || beforepost == 12){
    return 14
  } else if(beforepost == 13 || beforepost == 14){
    return 15
  } 
}

module.exports = nextpos