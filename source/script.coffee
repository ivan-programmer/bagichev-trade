### Script by Ivan Vinogradov for Bagichev Trade ###

doc = document
$ -> do main

main = ->
  do tabs
  do handlers
  do onStart

tabs = ->
  tabHandler tab for tab in ['manufacturer', 'production', 'contacts']
  $('#name').on 'click', ->
    activeTabs = doc.querySelectorAll '.tab-active'
    activeTab.style.opacity = 0 for activeTab in activeTabs
    doc.querySelector('#name-active').style.opacity = 1
    $.ajax
      url: './pages/main.php'
      cache: off
      success: (page) -> doc.querySelector('main').innerHTML = page
      beforeSend: -> do preloader

handlers = ->

onStart = -> $('#name').trigger 'click'

# ---------- #

tabHandler = (id) -> $('#' + id).on 'click', ->
  activeName = doc.querySelector '#name-active'
  activeTabs = doc.querySelectorAll '.tab-active'
  doc.querySelector('#name-active').style.opacity = 0
  activeTab.style.opacity = 0 for activeTab in activeTabs
  doc.querySelector('#' + id + ' .tab-active').style.opacity = 1
  $.ajax
    url: './pages/' + id + '.php'
    cache: off
    type: 'GET'
    success: (page) -> doc.querySelector('main').innerHTML = page
    beforeSend: -> do preloader

preloader = ->
  # Add preloader here...

### Made by Ivan Vinogradov for Bagichev Trade ###
