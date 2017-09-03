### Script by Ivan Vinogradov for Bagichev Trade ###

doc = document
$ -> do main

main = ->
  do tabs
  do handlers
  do onStart

tabs = ->
  tabs = ['manufacturer', 'production', 'contacts']

  tabs.forEach (tab) -> tabHandler tab

  $('#name').on 'click', ->

    activeTabs = doc.querySelectorAll '.tab-active'
    activeName = doc.querySelector '#name-active'
    main = doc.querySelector 'main'

    activeTabs.forEach (tab) -> tab.style.opacity = 0
    activeName.style.opacity = 1

    $.ajax
      url: './pages/main.php'
      cache: off
      success: (page) -> main.innerHTML = page
      beforeSend: -> do preloader

handlers = ->

onStart = -> $('#name').trigger 'click'

# ---------- #

tabHandler = (name) -> $('#' + name).on 'click', ->

  activeName = doc.querySelector '#name-active'
  activeTabs = doc.querySelectorAll '.tab-active'
  main = doc.querySelector 'main'

  activeName.style.opacity = 0
  activeTabs.forEach (tab) -> tab.style.opacity = 0

  doc.querySelector('#' + name + ' .tab-active').style.opacity = 1

  $.ajax
    url: './pages/' + name + '.php'
    cache: off
    type: 'GET'
    success: (page) -> main.innerHTML = page
    beforeSend: -> do preloader

preloader = ->
  # Add preloader here...

### Made by Ivan Vinogradov for Bagichev Trade ###
