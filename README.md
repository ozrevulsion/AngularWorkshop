# The basics of Angular
###### Everything you ever wanted to know about building a front end to the app we've been building in the workshops.

## What's in here?
In this repository you will find the code for the workshop that I will be running on the 26th of Feb, 2016. You will notice that there are number of folders marked as Stages. In each stage folder you will find the code in a state of completion that I will make a note of during the workshop. If at any stage you get lost or something doesn't work, Don't Panic! Just get listen to the rest of what I'm saying and wait for me to tell you when we are at the next stage and you can pick up from there.

## Stage 1

#### What's here
This stage has the basic layout for the app that we are going to be building which I've named "Talkative". This app's sole purpose in life is going to be to use Angular to speak with the routes we defined in our Nancy framework and interpret the results and feed them back to the user. Hopefully this will be where you begin and end. Pick this up and we can start making changes to it.

This stage has nothing in it except this layout but it's worth taking a moment to look over the layout. There are a couple of things to note:

1. On the panel itself I am using a media query to attempt to add the first steps towards being responsive and mobile ready. If you use the Chrome device emulator you will notice this still looks kind of nice on mobile devices and if you resize the screen it more or less always looks good. This is thanks to the media query and also the fact that I have used percentage sizing where appropriate.
1. I have used a couple of new CSS3 properties which are becoming more widely supported across all browsers and require less vendor prefixes these days. Things like border-radius, box-shadow and most excitingly flex-box! All these properties are worth getting comfortable with now because it should only be a year or two before these have full adoption in browsers and if you don't know them then you'll be behind! You can use http://www.caniuse.com to find out the compatibility of these tags with different browsers.
1. I've opted for a four colour scheme being a background color (#444), a secondary background color (#eee), a main color (#6bc997) and an accent color (#c96b9d). It's advisable that you don't use more colours than this if it can be avoided because it makes your site look too busy and harsh on the eye. Notice I haven't used any solid blacks or whites, these colours are harsh to the eye. Think of looking at snow that has a bright sun shining on it, not pleasant yeah? I chose these colours using a site called ColorPicker (http://www.colorpicker.com/) which you can input a colour into and it will suggest colours that go well with the one you want to use.

#### How to get to Stage 2

- For the purposes of the workshop and for simplicities sake we are going to use a CDN for Angular. In our apps we would most likely grab a copy of the framework and include in our finished website. Either way both methods start with the same action, let's go to https://angularjs.org/ and click the download. From here we can copy the CDN path and make a script tag at the bottom of our body.

  Why the bottom of the body? Because when the DOM loads it loads all elements on the page in the order in which they are defined. It is best practice to put your script tags at the bottom of the body because this way all of your DOM elements that the user can actually see get loaded first followed by the bulky javascript frameworks you might have. This give the illusion of a more responsive website. In reality it is also a best practice to include some very basic inline styles in the elements that are used for layout so that when the page loads it doesn't have to wait for the CSS to be applied and the website might appear to be empty but at least it is well formed. I haven't done this hear mainly to keep the template simple for the purposes of demonstrating the Angular side of things.

- Once we have the script tag included we can check if angular is loaded on our page correctly. To do this type angular in the console. If you get a Object response back then you've won so far!

- Next we need to create a module with a controller. We use these to bind data from our javascript to our DOM elements. Create yourself a folder where you can put your angular app files. I named mine "talkative" and and create a file to hold the initial definition of our module. Mine is called "talkative.js".

- In this file we need to call the angular.module function and give our module a name like this:

  ```
  angular.module("Talkative", [])
  ```
  This tells angular that you want to create an app called Talkative which at the moment has not dependencies (that's what the empty array means).

  From here we can add a controller to our app which is where we put the definition of our app's functionality you can do that like this:

  ```
  angular.module("Talkative", []).controller('TalkativeOutputController', ['$scope', function($scope) {
    $scope.whatAmI = "I am an Angular god!";
  }]);
  ```

  So what this says is; create me a controller called TalkativeOutputController. We pass in the $scope variable and this is an angular thing that we can inject into our controller and we can attach properties and functions to it to allow us to use those properties within the scope of the element that we have attached our controller to. In this instance we have set a variable called whatAmI to the text "I am an Angular god!".

- Finally we need to hook up angular to our HTML page. To do this we first need to hook up the app to our page. In this instance we will hook it up to the html. The validity of this will differ from app to app but you should know that the ng-app attribute will define the scope of the app as being the scope of the tag you put it on. i.e. you will only be able to use your app and it's artifacts within the scope of the DOM element that you put the ng-app on. Make your html tag like this:

  ```
  <html ng-app="Talkative">
  ```

- Next we need to add the controller to it's scope within our DOM. Change your the div marked with the class userOutputPanel to look like this:

  ```
  <div class="userOutputPanel" ng-controller="TalkativeOutputController">
    {{whatAmI}}
  </div>
  ```
  So we have used the TalkativeOutputController controller within out ng-controller tag. We have then done what is called a value binding on the whatAmI variable which we put on the $scope argument passed into the controller. Next we will make you a little more modest.

## Stage 2
### What's here

In this stage we have a mind numbingly basic app. Basic it may be though it is, none the less, an angular app. Next we are going to add the ability to affect the values in the app.
