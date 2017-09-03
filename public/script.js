
/* Script by Ivan Vinogradov for Bagichev Trade */

(function() {
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
    tabs.forEach(function(tab) {
      return tabHandler(tab);
    });
    return $('#name').on('click', function() {
      var activeName, activeTabs;
      activeTabs = doc.querySelectorAll('.tab-active');
      activeName = doc.querySelector('#name-active');
      main = doc.querySelector('main');
      activeTabs.forEach(function(tab) {
        return tab.style.opacity = 0;
      });
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
      activeTabs.forEach(function(tab) {
        return tab.style.opacity = 0;
      });
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

}).call(this);
