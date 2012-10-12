##What's Countly?
Countly is an innovative, real-time, open source mobile analytics application. It collects data from mobile phones, and visualizes this information to analyze mobile application usage and end-user behavior. There are two parts of Countly: the server that collects and analyzes data, and mobile SDK that sends this data (for iOS & Android).

Below you can find Countly SDK repositories;

- [Countly API Server (Countly-API)](https://github.com/gabrielrinaldi/Countly-API-Heroku)
- [Countly Android SDK (countly-sdk-android)](https://github.com/Countly/countly-sdk-android)
- [Countly iOS SDK (countly-sdk-ios)](https://github.com/Countly/countly-sdk-ios)

##How do I install Countly Frontend Server on Heroku?

1. Configure the [Countly API Server](https://github.com/gabrielrinaldi/Countly-API-Heroku) first
2. Create a Heroku server (Cedar)
3. Configure this repository to push to Heroku
4. Run `heroku config:add COUNTLYDB=Your COUNTLYDB from the API server`
5. Change server on countly.common.js (`countlyCommon.READ_API_URL = "http://your_api_server/o"`)
6. Push to Heroku and you are done

After installation, for each app you create if you want to have an icon you have to create and add it manually.

1. Create the application
2. Get the app key (inspect the image to see the png file name)
3. Create a png file with a size of 22x22 named after your app ID
4. Put it on public/appimages and push to Heroku

##Frontend

Quick overview of some important files and directories included in this package;

####1. frontend/express/app.js

Countly dashboard that runs on express server.

####2. frontend/express/public/javascripts/countly
Contains seperate  helper js files for each data visualization. For example `countly.session.js` is responsible for calculating session related metrics and interacts with `api/api.js` to retrieve data from the sessions collection.

##Which mobile operating systems are supported?
Countly offers integration with world's two leading smartphones, Android and iOS.

##How can I help you with your efforts?
Glad you asked. We need ideas, feedbacks and constructive comments. All your suggestions will be taken care with upmost importance.

My [Twitter](http://twitter.com/gabriel_rinaldi)

Countly is also on [Twitter](http://twitter.com/gocountly) (Original) and [Facebook](http://www.facebook.com/Countly), if you would like to keep up with their fast progress!

##Home

[http://count.ly](http://count.ly "Countly")

##Community & support

[http://support.count.ly](http://support.count.ly "Countly Support")
