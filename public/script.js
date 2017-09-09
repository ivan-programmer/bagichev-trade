
/* Script by Ivan Vinogradov for Bagichev Trade */

(function() {
  var Tab, doc, main, onStart, preloader, tabs;

  doc = document;

  $(function() {
    return main();
  });

  main = function() {
    tabs();
    return onStart();
  };

  tabs = function() {
    var contactsTab, mainTab, manufacturerTab, productionTab;
    mainTab = new Tab('main');
    manufacturerTab = new Tab('manufacturer');
    productionTab = new Tab('production');
    contactsTab = new Tab('contacts');
    tabs = [mainTab, manufacturerTab, productionTab, contactsTab];
    return tabs.forEach(function(tab) {
      return tab.onClick();
    });
  };

  Tab = (function() {
    function Tab(name) {
      this.setName(name);
    }

    Tab.prototype.setName = function(name1) {
      this.name = name1;
    };

    Tab.prototype.getName = function() {
      return this.name;
    };

    Tab.prototype.onClick = function() {
      var name;
      name = this.getName();
      return $('#' + name).on('click', function() {
        main = doc.querySelector('main');
        $('.tab-active').css({
          opacity: 0
        });
        $('#' + name + ' .tab-active').css({
          opacity: 1
        });
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

    return Tab;

  })();

  onStart = function() {
    $('#main .tab-active').css({
      top: '48px'
    });
    return $('#main').trigger('click');
  };

  preloader = function() {};


  /* Made by Ivan Vinogradov for Bagichev Trade */

}).call(this);
