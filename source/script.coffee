### Script by Ivan Vinogradov for Bagichev Trade ###

doc = document

$ -> do main

main = ->
  do tabs
  do onStart

tabs = ->
  mainTab = new Tab 'main'
  manufacturerTab = new Tab 'manufacturer'
  productionTab = new Tab 'production'
  contactsTab = new Tab 'contacts'

  tabs = [mainTab, manufacturerTab, productionTab, contactsTab]

  tabs.forEach (tab) -> do tab.onClick

class Tab
  constructor: (name) -> @setName name
  setName: (@name) ->
  getName: -> @name
  onClick: ->
    name = do @getName
    $('#' + name).on 'click', ->
      main = doc.querySelector 'main'

      $('.tab-active').css
        opacity: 0

      $('#' + name + ' .tab-active').css
        opacity: 1

      $.ajax
        url: './pages/' + name + '.php'
        cache: off
        type: 'GET'
        success: (page) -> main.innerHTML = page
        beforeSend: -> do preloader

onStart = ->
  $('#main .tab-active').css
    top: '48px'
  $('#main').trigger 'click'

preloader = ->
  # Add preloader here...

### Made by Ivan Vinogradov for Bagichev Trade ###
