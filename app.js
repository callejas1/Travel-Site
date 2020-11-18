// sidenav menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});
// media slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 3500,
});
// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    'Corn Island': null,
    Granada: null,
    'Little Corn Island': null,
    'Masaya volcano': null,
  },
});
// Boxed imgs
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//Scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {});
