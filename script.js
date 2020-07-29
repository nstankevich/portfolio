var date = new Date().getHours()
document.getElementById('greeting').innerHTML = date >= 12 && date < 17 ? 'Good Afternoon.'
	: date >= 17 && date < 20 ? 'Good Evening.'
	: (date >= 20 && date < 24) || (date >= 0 && date < 5) ? 'Seriously, go to bed... but, only after you read my site.' 
	: 'Good Morning.';

  function dropdownMenu() {
      var x = document.getElementById("dropdownClick");
      if (x.className === "top-nav-1") {
          x.className += " responsive";
      } else {
          x.className = "top-nav-1";
      }
  }
