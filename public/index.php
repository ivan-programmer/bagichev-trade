<?php
  $tabs = [
    'manufacturer' => 'Производитель',
    'production' => 'Продукция',
    'contacts' => 'Контакты'
  ];

  $footer_images = [
    'VK' => 'vk.png',
    'Facebook' => 'facebook.png'
  ];
?>

<!DOCTYPE html>
<!-- Site by Ivan Vinogradov specially for Bagichev Trade-->
<html>

<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <meta http-equiv='X-UA-Compatible' content='ie=edge' />
  <title>Bagichev Trade</title>
  <link rel='stylesheet' href='stylesheet.min.css' />
</head>

<body>

  <div id='wrapper'>

    <header>
      <div id='name'>
        <span>Bagichev Trade</span>
        <div id="name-active"></div>
      </div>
      <? foreach($tabs as $id => $name): ?>
        <div class='tab' id='<?= $id ?>'>
          <span><?= $name ?></span>
          <div class='tab-active'></div>
        </div>
      <? endforeach; ?>
    </header>

    <main></main>
    
    <footer>
      <div id='footer-images'>
      <? foreach($footer_images as $alt => $filename): ?>
        <div class='footer-image'><img src='<?= "./images/$filename" ?>' alt='<?= $alt ?>'></div>
      <? endforeach; ?>
      </div>
    </footer>

  </div>

  <script src='./libs/jquery.min.js' type='text/javascript'></script>
  <script src='./script.min.js' type='text/javascript'></script>
</body>

</html>
<!-- Made by Ivan Vinogradov for Bagichev Trade-->
