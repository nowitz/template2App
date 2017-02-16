# templateIonic2App
TypeScript, Angular 2, Ionic 2

### Plugi 
##### Dotahne zakladni pluginy: 
ionic state restore

##### Only install all plugins
ionic state restore --plugins
##### or
cordova state restore --plugins

##### Only remove all installed plugins
ionic state clear -- plugins

##### Remove all then Install all plugins in package.json
ionic state reset -- plugins



##### Pouzity pluginy
ionic plugin add cordova-plugin-network-information --save

cordova plugin add cordova-sqlite-storage --save
npm install --save @ionic/storage

npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader --save
(https://github.com/ngx-translate/core)


1) prejmenovat vsude templateIonic2App
2) npm install
3) ionic state restore
4) ionic build ios/android
5) ionic serve