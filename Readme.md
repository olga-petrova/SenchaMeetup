<b>SenchaMeetup</b>

Installation guide (it is needed because it is not allowed to upload source code of ExtJS to GitHub)

1) Download ExtJS 6 (https://www.sencha.com/products/extjs/evaluate/) and Sencha Cmd 6 (https://www.sencha.com/products/extjs/cmd-download/)

2) Install Sencha Cmd 6

3) Run command from the root folder of your website: sencha -sdk {path to ExtJS 6 sdk} generate app SenchaMeetup SenchaMeetup/

4) Copy app, classic, modern, overrides, data, lib, packages, sass, resources folders and app.json and index.html files into SenchaMeetup folder (created at step 3)

5) Copy content of app.json file but save the same "id" property.

6) Run command from SenchaMeetup folder sencha app build

7) Run command from SenchaMeetup folder sencha app watch

8) SenchaMeetup application will be available under: http://localhost:1841/
