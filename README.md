# TinLanhOrange
This is Tin Lanh Orange Video App - TinLanh Orange Channel on Youtube

Enter Passphrase for keystore: Hoangyen7
Enter key password for alias_name: hoangyen

# Setup For MacOS and Linxux
Install Java and SDK:

sudo apt-get update

sudo apt-get install default-jdk

download android sdk

tools/android update sdk --no-ui

export JAVA_HOME="/usr/bin/java"
export ANDROID_HOME="/home/vagrant/android-sdk-linux/"
export ANDROID_TOOLS="/home/vagrant/android-sdk-linux/tools"
export ANDROID_PLATFORM_TOOLS="/home/vagrant/android-sdk-linux/platform-tools"
PATH=$PATH:$ANDROID_HOME:$ANDROID_TOOLS:$ANDROID_PLATFORM_TOOLS

Install node:

https://nodejs.org/dist/v0.12.7/node-v0.12.7.pkg

Install ionic/cordova, from a command line:

npm install -g ionic cordova gulp

npm install

Once you have the code, CD into the folder and type:

ionic state restore

#for run on real device with http request
install this plugin
cordova plugin add cordova-plugin-whitelist

This will install all plugins and platforms (this is only needed if you want to actually compile the app and install it on your device)

Then run:

ionic serve

And you will get the app opened in a browser window (recommend Chrome). As you make changes to the style sheet, it should automatically update in the browser.

# Build notes:

cordova platform remove android

cordova platform add android

cordova plugin rm org.apache.cordova.console

sudo apt-get install default-jdk

cordova build --release android

cordova compile android



export ANDROID_HOME=~/home/vagrant/android-sdk-linux/

export PATH=$PATH:/home/vagrant/android-sdk-linux/tools/


sudo chmod 0777 /home/vagrant/apps/TinLanhOrange/platforms/android/gradlew

sudo chmod 0777 /home/vagrant/apps/TinLanhOrange/platforms/android/settings.gradle

sudo dpkg --add-architecture i386
sudo apt-get -qqy update
sudo apt-get -qqy install libncurses5:i386 libstdc++6:i386 zlib1g:i386

# Build with IOS

< key >NSAppTransportSecurity</ key>
< dict>
  <!--Include to allow all connections (DANGER)-->
  <key>NSAllowsArbitraryLoads</key>
      <true/>
</ dict>

# Publishing your app

/usr/lib/jvm/java-7-openjdk-amd64/bin/keytool -genkey -v -keystore TinLanhOrange.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000

/usr/lib/jvm/java-7-openjdk-amd64/bin/jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore TinLanhOrange.keystore /home/vagrant/apps/TinLanhOrange/platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name

/home/vagrant/android-sdk-linux/build-tools/23.0.1/zipalign -v 4 /home/vagrant/apps/TinLanhOrange/platforms/android/build/outputs/apk/android-release-unsigned.apk TinLanhOrange.apk


# Code Layout
The file structure is as follows:

scss/ionic.app.scss – Style sheet using SASS if you're into that (will be compiled automatically when you are using "ionic serve" above.

www/app – all the actual code for the application sections/screens/etc. Within this folder, code is organized by feature, generally this will be by screens/pages in the app. Within each feature folder is the controller code and the template HTML.

www/css – CSS styling file(s)

www/img – Images

www/templates – Globally useful HTML templates. menu.html contains the overall navigation

www/js – Javascript code, generally of a global nature like services.

www/lib – Angular plugins and other javascript code libraries (third party, not stuff we wrote)

www/index.html – the root HTML of the application. Generally this is containing just the script tags to load all our code, and no real styling or anything like that.

Most styling should be possible to do with just the css and img folders. The HTML files use Angular so you will see "directives" (HTML attributes) that do things like repeat the blocks, insert data from the controllers, etc.

 # FOR YOUTUBE LIBS
 
 https://github.com/brandly/angular-youtube-embed/blob/master/src/demo/the.html
 
 # Angular YouTube Embed

> Embed a YouTube player with a simple directive.

```shell
$ bower install --save angular-youtube-mb
```

or

```shell
$ npm install --save angular-youtube-mb
```

## Can I use it?

Sure! Let me show you.

```html
<!-- Include YT library and this directive -->
<script src="https://www.youtube.com/iframe_api"></script>
<script src="angular-youtube-embed.js"></script>
```

```javascript
// Create your app with 'youtube-embed' dependency
var myApp = angular.module('myApp', ['youtube-embed']);
```

```javascript
// Inside your controller...
myApp.controller('MyCtrl', function ($scope) {
  // have a video id
  $scope.theBestVideo = 'sMKoNBRZM1M';
});
```

```html
<!-- Use 'youtube-video' as an element or attribute. -->
<youtube-video video-id="theBestVideo"></youtube-video>
```

It's that simple. [See it in action.](http://brandly.github.io/angular-youtube-embed/)

## But I only have a URL.

No problem.

```javascript
$scope.anotherGoodOne = 'https://www.youtube.com/watch?v=18-xvIjH8T4';
```

```html
<youtube-video video-url="anotherGoodOne"></youtube-video>
```

## What about browserify?

If you are using browserify or webpack, make sure you've installed this module:

```shell
$ npm install --save angular-youtube-mb
```

and use it in your code like this:

```javascript
require('angular-youtube-mb');
```

## Is that it?

Not quite!

### Events and Player Controls

* `youtube.player.ready`
* `youtube.player.ended`
* `youtube.player.playing`
* `youtube.player.paused`
* `youtube.player.buffering`
* `youtube.player.queued`
* `youtube.player.error`

Events allow you to keep an eye on the state of things from your controller. For example, if you wanted to a watch a video over and over again forever

```javascript
myApp.controller('MyCtrl', function ($scope) {
  $scope.looper = 'VvTvtIeXJ1I';

  $scope.$on('youtube.player.ended', function ($event, player) {
    // play it again
    player.playVideo();
  });
});
```

A full list of `player` methods can be found [here](https://developers.google.com/youtube/iframe_api_reference).

### Player Functions

Add `player` to embedded youtube player to reference Youtube's video player object to use player functions like `playVideo()`, `stopVideo()`:

```html
<!-- use 'player' to reference player object. -->
<youtube-video video-id="'sMKoNBRZM1M'" player="bestPlayer"></youtube-video>
<!-- perform video playback operations -->
<button ng-click="bestPlayer.playVideo()">Play</button>
<button ng-click="bestPlayer.stopVideo()">Stop</button>
```

Note: `playVideo()`, `loadVideoById()` won't work in all mobile environments until user initiates playback.

### Utilities

These might be handy.

* `youtubeEmbedUtils.getIdFromURL`
* `youtubeEmbedUtils.getTimeFromURL`

Just inject the service into your controller

```javascript
myApp.controller('MyCtrl', function ($scope, youtubeEmbedUtils) {
  // 'VvTvtIeXJ1I'
  console.log(youtubeEmbedUtils.getIdFromURL('https://www.youtube.com/watch?v=VvTvtIeXJ1I'));
});
```

`getIdFromURL` is covered with [some tests](https://github.com/brandly/angular-youtube-embed/blob/master/test/unit/get-id-from-url.coffee), but [let me know](https://github.com/brandly/angular-youtube-embed/issues/new) if you find any URLs it doesn't support.

### Player Parameters

YouTube's embedded player can take a number of optional parameters. You can find [a full list here](https://developers.google.com/youtube/player_parameters#Parameters).

For example, you could hide the player's controls and have it start automatically. Add `player-vars` to your embedded player.

```html
<youtube-video video-id="theBestVideo" player-vars="playerVars"></youtube-video>
```

And define `playerVars` in your controller.

```javascript
$scope.playerVars = {
    controls: 0,
    autoplay: 1
};
```

Note: `autoplay` won't work on mobile devices.

### Player Size

You can set both `player-width` and `player-height` on the element.

```html
<youtube-video video-id="theBestVideo" player-width="'100%'" player-height="'300px'"></youtube-video>
```

Both values are treated as expressions, which is why the inner single-quotes are need.

### Responsive Videos

You'll need to add a few classes to your markup.

```html
<div class="embed-responsive embed-responsive-16by9">
  <youtube-video class="embed-responsive-item" video-id="theBestVideo"></youtube-video>
</div>
```

I took these classes from [Bootstrap](http://getbootstrap.com/components/#responsive-embed), so you might already have them. If not, here they are:

```css
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}

.embed-responsive.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}

.embed-responsive-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
```

Check out [the demo](http://brandly.github.io/angular-youtube-embed) and [the code behind it](https://github.com/brandly/angular-youtube-embed/blob/master/src/demo/the.js).

### Development

First, make sure you have the necessary dependencies installed locally and [gulp](http://gulpjs.com/) installed globally
```shell
$ npm install
$ bower install
$ npm install --global gulp
```

To build a minfied version to `dist/`
```shell
$ gulp dist
```

To host the demo on a local server
```shell
$ gulp host
```

To run a couple tests
```shell
$ gulp test
```

And if you want to do all the aforementioned tasks
```shell
$ gulp
```
