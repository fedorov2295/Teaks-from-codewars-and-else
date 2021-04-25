// second to string '... hours and ... minutes'

function toTime(seconds) {
    return `${Math.floor(seconds/3600)} hour(s) and ${Math.floor((seconds-Math.floor(seconds/3600)*3600)/60)} minute(s)`
  }

//sum of digits

  function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }