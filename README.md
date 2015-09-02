# TinLanhOrange
This is Tin Lanh Orange Video App - TinLanh Orange Channel on Youtube

# Setup For MacOS
Install node:

https://nodejs.org/dist/v0.12.7/node-v0.12.7.pkg

Install ionic/cordova, from a command line:

npm install -g ionic cordova gulp

npm install

Once you have the code, CD into the folder and type:

ionic state restore

This will install all plugins and platforms (this is only needed if you want to actually compile the app and install it on your device)

Then run:

ionic serve

And you will get the app opened in a browser window (recommend Chrome). As you make changes to the style sheet, it should automatically update in the browser.

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
