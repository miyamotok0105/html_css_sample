
インストール    


```
npm install --save-dev gulp
npm install --save-dev gulp-htmlhint
npm install --save-dev gulp-csslint
npm install --save-dev browser-sync@2.25.0
```


lintをかける。エラーのチェックとかできて便利。    


```
gulp html
gulp css
```


同期する。かなり便利。    
起動し直さないとgulpfile.jsの変更は反映されない。    


```
gulp browser
```




http://localhost:3000/files/temp/1.html
http://localhost:3000/files/ch01/index.html
http://localhost:3000/files/ch02/index.html