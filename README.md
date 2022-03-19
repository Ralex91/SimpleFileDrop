# Simple File Drop Vanilla 📦
Is a simple Drag and Drop HTML without libraries for the front-end in an html page, it can be used in any type of project

[👀 Preview Here](https://htmlpreview.github.io/?https://github.com/Ralex91/SimpleFileDrop/blob/main/index.html)

## 🛠 Installation
- Copy files from this repositorie in your website

  `./assets/ra-filedrop/style.css`

  `./assets/ra-filedrop/script.js`

- Add these lines in your page 

  Page header :
  ```html
  <link rel="stylesheet" href="./assets/ra-filedrop/style.css"/>
  ```

  Page Body :
  ```html
  <script type="text/javascript" src="./assets/ra-filedrop/script.js"></script>
  ```

## 🧩 Usage
To insert it in your page use this code :

```html
<div class="ra-dropfile">
  <input id="file" type="file" onchange="RaFileDrop.LoadDrop(this)" />

  <div class="info">
    <i id="icon" style="font-size: 80px;" class="fas fa-download"></i>
    <p id="title">Choose a file</p>
  </div>
</div>
```

Preview :
![alt text](https://github.com/Ralex91/SimpleFileDrop/blob/main/previews/dark.PNG?raw=true)

## 🖌 Clear theme
A clear theme is available just add the class `light`

```html
<div class="ra-dropfile light">
  <input id="file" type="file" onchange="RaFileDrop.LoadDrop(this)" />

  <div class="info">
    <i id="icon" style="font-size: 80px;" class="fas fa-download"></i>
    <p id="title">Choose a file</p>
  </div>
</div>
```

Preview :
![alt text](https://github.com/Ralex91/SimpleFileDrop/blob/main/previews/light.PNG?raw=true)

## 🏷 Simplified by Ralex91
