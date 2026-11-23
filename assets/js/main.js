// Menu mobile: apre e chiude la navigazione su schermi piccoli
(function () {
  var nav = document.querySelector('.nav');
  var btn = document.querySelector('.nav-toggle');
  if (!nav || !btn) return;
  btn.addEventListener('click', function () {
    var aperto = nav.classList.toggle('aperto');
    btn.setAttribute('aria-expanded', aperto ? 'true' : 'false');
  });
})();
