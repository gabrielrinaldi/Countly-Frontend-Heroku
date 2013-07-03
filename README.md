##What's Countly?

Countly is an innovative, real-time, open source mobile analytics application. It collects data from mobile phones, and visualizes this information to analyze mobile application usage and end-user behavior. There are two parts of Countly: the server that collects and analyzes data, and mobile SDK that sends this data.

Below you can find Countly SDK repositories;

- [API Server (Countly-API)](https://github.com/gabrielrinaldi/Countly-API-Heroku)
- [Android SDK (countly-sdk-android)](https://github.com/Countly/countly-sdk-android)
- [iOS SDK (countly-sdk-ios)](https://github.com/Countly/countly-sdk-ios)
- [ActionScript 3 SDK (countly-sdk-as3)](https://github.com/Countly/countly-sdk-as3)
- [Windows Phone SDK (countly-sdk-windows-phone)](https://github.com/Countly/countly-sdk-windows-phone)
- [Blackberry WebWorks SDK (countly-sdk-blackberry-webworks)](https://github.com/Countly/countly-sdk-blackberry-webworks)
- [Icenium and Phonegap SDK (countly-sdk-js)](https://github.com/Countly/countly-sdk-js)
- [Unity SDK (countly-sdk-unity)](https://github.com/Countly/countly-sdk-unity)

##How do I install Countly Frontend Server on Heroku?

1. Configure the [API Server](https://github.com/gabrielrinaldi/Countly-API-Heroku) first
2. Create a Heroku server (Cedar)
3. Add [SendGrid add-on](https://addons.heroku.com/sendgrid) by running `heroku addons:add sendgrid:starter`
4. Run `heroku config:add SENDGRID_SENDER=example@example.com`
5. Configure this repository to push to Heroku
6. Run `heroku config:add COUNTLYDB=Your COUNTLYDB from the API server`
7. Change server on countly.common.js (`countlyCommon.READ_API_URL = "http://your_api_server/o"`)
8. Push to Heroku and you are done

I am using S3 now for handling app icons. You have to setup your keys for it to work:

1. Run `heroku config:add S3_ACCESS_KEY=key S3_ACCESS_SECRET=secret S3_BUCKET=bucket`
2. Update the path with your url in the files (Search for `appimage`)
3. Make sure the file is 25x25 (had to remove imagemagick)

##Frontend

Quick overview of some important files and directories included in this package;

####1. frontend/express/app.js

Countly dashboard that runs on express server.

####2. frontend/express/public/javascripts/countly
Contains seperate  helper js files for each data visualization. For example `countly.session.js` is responsible for calculating session related metrics and interacts with `api/api.js` to retrieve data from the sessions collection.

##How can I help you with your efforts?

Glad you asked. We need ideas, feedbacks and constructive comments. All your suggestions will be taken care with upmost importance.

My [Twitter](http://twitter.com/gabriel_rinaldi)

Countly is also on [Twitter](http://twitter.com/gocountly) (Original) and [Facebook](http://www.facebook.com/Countly), if you would like to keep up with their fast progress!

##Countly

[http://count.ly](http://count.ly "Countly")

##Community & support

[http://support.count.ly](http://support.count.ly "Countly Support")
