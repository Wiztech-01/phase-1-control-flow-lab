function scuberGreetingForFeet(travel){
  // Write your code here!
  if( travel <= 800 ){
    return ''Standard Price''
  }
  else if (travel <= 5000){
    return 'Bookings to be made early.'
  }
  else if (travel > 5000){
    return 'Hiked prices.'
  }
}

function ternaryCheckCity(City){
  // Write your code here!
  if (City === 'Kisumu'){
    return 'yes please!.'
  }else{
    return 'No thank you!.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'client tips'){
    return 'Thank you so much.'
  }else if(tip === 'no client tips'){
    return 'Thank you! Welcome again!.'
  }else{
    return 'BHave a good day.'
  }
}