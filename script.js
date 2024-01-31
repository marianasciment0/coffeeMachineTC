var isPowerOn = false;

function togglePower() {
  var waterBall = document.getElementById('waterBall');
  var coffeeBall = document.getElementById('coffeeBall');
  var water = document.getElementById('water');
  var coffee = document.getElementById('coffee');
  var machine = document.getElementById('coffee-machine');
  var readyCoffee = document.getElementById('readyCoffee');

  if (isPowerOn) {
    machine.classList.remove('on');
    waterBall.style.transform = 'translateY(0)';
    coffeeBall.style.transform = 'translateY(0)';
    
    setTimeout(function() {
      readyCoffee.style.transform = 'translateY(0)';
    }, 5000);
  } else {
    machine.classList.add('on');
    waterBall.style.transform = 'translateY(100px)';
    coffeeBall.style.transform = 'translateY(100px)';

    setTimeout(function() {
      readyCoffee.style.transform = 'translateY(150px)';
    }, 5000);
  }

  isPowerOn = !isPowerOn;
}
