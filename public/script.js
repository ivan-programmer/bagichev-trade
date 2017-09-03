
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
  var i, len, ref, tab;
  ref = ['manufacturer', 'production', 'contacts'];
  for (i = 0, len = ref.length; i < len; i++) {
    tab = ref[i];
    tabHandler(tab);
  }
  return $('#name').on('click', function() {
    var activeTab, activeTabs, j, len1;
    activeTabs = doc.querySelectorAll('.tab-active');
    for (j = 0, len1 = activeTabs.length; j < len1; j++) {
      activeTab = activeTabs[j];
      activeTab.style.opacity = 0;
    }
    doc.querySelector('#name-active').style.opacity = 1;
    return $.ajax({
      url: './pages/main.php',
      cache: false,
      success: function(page) {
        return doc.querySelector('main').innerHTML = page;
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

tabHandler = function(id) {
  return $('#' + id).on('click', function() {
    var activeName, activeTab, activeTabs, i, len;
    activeName = doc.querySelector('#name-active');
    activeTabs = doc.querySelectorAll('.tab-active');
    doc.querySelector('#name-active').style.opacity = 0;
    for (i = 0, len = activeTabs.length; i < len; i++) {
      activeTab = activeTabs[i];
      activeTab.style.opacity = 0;
    }
    doc.querySelector('#' + id + ' .tab-active').style.opacity = 1;
    return $.ajax({
      url: './pages/' + id + '.php',
      cache: false,
      type: 'GET',
      success: function(page) {
        return doc.querySelector('main').innerHTML = page;
      },
      beforeSend: function() {
        return preloader();
      }
    });
  });
};

preloader = function() {};


/* Made by Ivan Vinogradov for Bagichev Trade */
