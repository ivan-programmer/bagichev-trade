
/* Script by Ivan Vinogradov for Bagichev Trade */
var doc, handlers, main, onStart, preloader, tabHandler, tabs;

doc = document;

$(function() {
  return main();
});

main = function() {
  tabs();
  handlers();
  return onStart();
};

tabs = function() {
  tabs = ['manufacturer', 'production', 'contacts'];
  tabs.forEach(tabHandler(this), this);
  return $('#name').on('click', function() {
    var activeName, activeTabs;
    activeTabs = doc.querySelectorAll('.tab-active');
    activeName = doc.querySelector('#name-active');
    main = doc.querySelector('main');
    activeTabs.forEach(this.style.opacity = 0, this);
    activeName.style.opacity = 1;
    return $.ajax({
      url: './pages/main.php',
      cache: false,
      success: function(page) {
        return main.innerHTML = page;
      },
      beforeSend: function() {
        return preloader();
      }
    });
  });
};

handlers = function() {};

onStart = function() {
  return $('#name').trigger('click');
};

tabHandler = function(name) {
  return $('#' + name).on('click', function() {
    var activeName, activeTabs;
    activeName = doc.querySelector('#name-active');
    activeTabs = doc.querySelectorAll('.tab-active');
    main = doc.querySelector('main');
    activeName.style.opacity = 0;
    activeTabs.forEach(this.style.opacity = 0, this);
    doc.querySelector('#' + name + ' .tab-active').style.opacity = 1;
    return $.ajax({
      url: './pages/' + name + '.php',
      cache: false,
      type: 'GET',
      success: function(page) {
        return main.innerHTML = page;
      },
      beforeSend: function() {
        return preloader();
      }
    });
  });
};

preloader = function() {};


/* Made by Ivan Vinogradov for Bagichev Trade */
