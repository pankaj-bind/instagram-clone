document.getElementById('moreLink').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
  });

  document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
      this.style.display = 'none';
    }
  });