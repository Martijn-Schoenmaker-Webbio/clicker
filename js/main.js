$( document ).ready(function() {
  var numberHolder = $(".number");
  
  if(localStorage.getItem('amountOfClicks')){
    numberHolder.html(localStorage.getItem('amountOfClicks'));
  } else {
    numberHolder.html(0);
    localStorage.setItem('amountOfClicks', numberHolder.html());
  }
  
  if(localStorage.getItem('clickGrowth')){
  } else {
    localStorage.setItem('clickGrowth', 1)
  }
  
  if(localStorage.getItem('pointerAmount')){
    var pointerAmount = localStorage.getItem('pointerAmount');
  } else {
    localStorage.setItem('pointerAmount', 0)
    var pointerAmount = 0;
  }
    
  function addCookies(amount){
    numberHolder.html(Number(numberHolder.html()) + Number(amount));
    localStorage.setItem('amountOfClicks', numberHolder.html());
  }
  
  $( ".number" ).click(function() {
    clickAnimation(numberHolder, 80);
    addCookies(localStorage.getItem('clickGrowth'));
  });
  
  $( ".pointer" ).click(function() {
    addPointer();
  });

  function addPointer(){
    localStorage.setItem('pointerAmount', (Number(localStorage.getItem('pointerAmount')) + 1));
    clearInterval(pointerInterval);
    var pointerInterval = setInterval( function() { 
      addCookies(localStorage.getItem('clickGrowth')); 
    }, (2000 / pointerAmount) );
  }
  
  function clickAnimation(target, ms){
    target.css('animation','' + ms + 'ms pulsate ease-in-out');
    setTimeout(() => { finishedClick(target) }, ms);
  }
  
  function finishedClick(target){
    target.css('animation','none');
  }
});