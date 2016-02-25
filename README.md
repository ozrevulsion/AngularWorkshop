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
    $scope.whatAmI = "Angular god!";
  }]);
  ```

  So what this says is; create me a controller called TalkativeOutputController. We pass in the $scope variable and this is an angular thing that we can inject into our controller and we can attach properties and functions to it to allow us to use those properties within the scope of the element that we have attached our controller to. In this instance we have set a variable called whatAmI to the text "I am an Angular god!". Note that the second argument is an array. This can actually either be an array or a function. If it is just a function then this is taken to the be the functionality for the controller. If it is an array then what is expected is any number of strings and the last element should be the function definition. The strings at the start the string representation of the variable names used in the arguments of the function. This is done to facilitate minification so that when the javascript you write is mangled the variable names can be parsed back to what they were before mangling. If you don't do this and then uglify your code then your angular app will break.

- Finally we need to hook up angular to our HTML page. To do this we first need to hook up the app to our page. In this instance we will hook it up to the html. The validity of this will differ from app to app but you should know that the ng-app attribute will define the scope of the app as being the scope of the tag you put it on. i.e. you will only be able to use your app and it's artifacts within the scope of the DOM element that you put the ng-app on. Make your html tag like this:

  ```
  <html ng-app="Talkative">
  ```

- Next we need to add the controller to it's scope within our DOM. Change your the div marked with the class userOutputPanel to look like this:

  ```
  <div class="userOutputPanel" ng-controller="TalkativeOutputController">
    I am a {{whatAmI}}
  </div>
  ```
  So we have used the TalkativeOutputController controller within out ng-controller tag. We have then done what is called a value binding on the whatAmI variable which we put on the $scope argument passed into the controller. Next we will make you a little more modest.

## Stage 2
### What's here

In this stage we have a mind numbingly basic app. Basic it may be though it is, none the less, an angular app. Next we're going to make our app do things that will make it look more like the sort of functionality that we want to provide. Let's make a results box.

### What to do to get to Stage 3

- Let's begin by fleshing out the html structure of what we want a result to look like. A result needs to display to the user the Id, the name value we've given to the task and the isComplete value. This is as the scheme that we defined in the last workshop. So to display this information we need something like this:

  ```
  <div class="result">
    <div class="result-row">
      <span class="result-header-column">Id </span>
      <span class="result-value-column">guid</span>
    </div>
    <div class="result-row">
      <span class="result-header-column">Name </span>
      <span class="result-value-column">my name</span>
    </div>
    <div class="result-row">
      <span class="result-header-column">isComplete </span>
      <span class="result-value-column">
        <i></i>
      </span>
    </div>
  </div>
  ```
  Copy, paste or type in the html above over the top of what you previously had in the userOutputPanel. At this point if you refresh your app you should see a result box now appear showing the Id value of guid and the Name value of my name. This should display correctly because all stages of the solution join to a completed CSS file to avoid this becoming an all out CSS tutorial.

- So far the values we see in the result are hard coded let make values for the result on our controller in the same way that we did previously. Go back to our controller and create yourself and create a variable on the $scope for each of id, name and isCompleted. Go ahead default the values for id and name to some arbitrary string values that will recognise when they load in the browser so you know if you've done things right.

- Now we can head back to HTML. You will need to put value bindings into each of the span's marked with the result-value-column class using the double curly brace value binding notation we used earlier. You can do this for both the Id and the Name values. If you hit refresh on your page now you will find that the values you have put on the controller appear in your result.

- One thing is not showing up at the moment however and that is the isComplete value. You will notice if you look at the markup that within the value column is just an icon tag and that's it! The reason for this is we are going to use the icon tag along with the ng-class binding and some font based icons to allow us to show the boolean value with either a tick or a cross. So first we need to get out font based icon set. We are going to use font awesome for this. Go to (http://www.fontawesome.io) and along the top click "Get Started". You'll see under the title "Easiest" a link to the font awesome CDN. Once again we are going to use a CDN for simplicity here but in Real Life TM we would probably pull this library down for use locally. Copy this link into the header of your index.html.

- Now we are going to use the font awesome icons in an ng-class binding. The ng-class binding will return a class to be added to the elements class DOM property based on the result of a boolean expression. In this case we want to return a class value of "fa fa-check" if isComplete is true and "fa fa-times" (for the cross) if isComplete is false. We can do this by changing the icon tag like this:

  ```
  <i ng-class="{'fa fa-check': isComplete, 'fa fa-times': !isComplete}"></i>
  ```
  Hit f5 on your browser and see what it looks like. Now change the isComplete value in your module and be sure to audibly gasp in amazement at your skill.

- Finally you may have noticed that whilst you were hitting f5 every now and again you saw the curly brace syntax of the value bindings that you have made. This is due to the fact that we are putting our instance of angular at the bottom of the body. So the browser is loading angular last an as such it doesn't have a chance to parse the curly bracket syntax and replace it before the DOM displays these elements. To avoid this we can add the ng-cloak attribute to the value columns of the id and the name. There is some CSS in the site.css which will cause these elements to be set to display none so the user will not see the curly bracket syntax. Angular automatically removes the ng-cloak attribute when the values are bound and these elements will be displayed again.

## Stage 3
### What's here

Now we have an app that displays data a lot more like what we would want our real app to display. However at the moment it only displays one result and it would be much nicer if we could display more results than just one. Let's go about making our app display multiple results.

### What to do to get to Stage 5

- First let's change the module. So you can go ahead and remove the current scope variables from the controller. Once you have done this you can add a new scope variable and call it results. Results should be an array and for now just put one object in it. This object should have an id, name and isComplete variable on it just like your previous scope variables. It will look like this:

  ```
  $scope.results = [
    {
      id: "a really long guid",
      name: "name of my task",
      isComplete: true
    }
  ];
```
- Now we can attack our HTML again. This time we will be using the ng-repeat binding. This basically foreach loops over an array that you pass it from the scope and builds a copy of the template which it takes from the element scope that you define the ng-repeat on. If that's not clear keep reading and hopefully it will make sense as we go. First on the div marked with the result class add the ng-repeat binding like this:

  ```
  <div class="result" ng-repeat="result in results">
  ```

  So this is that foreach syntax I was talking about. This says make a copy of this div and it's contents then bind that html you've created to this item in the results array. Angular then rinse and repeats for every item in the array.

- Another change we have to make to the html is that we are no longer binding to the variables we on the scope instead we are binding to the variables that are on the item that angular is binding the template to. In this instance we have defined this item as being called result (you can see this in the ng-repeat binding). So for each of id, name and isComplete we must prepend each with a "result." so that we are binding to the properties of result rather than the properties of the scope.

- If you hit f5 now, hopefully. You will see no change what-so-ever. If you've actually followed along then this is a good thing! It means we are now successfully binding to the array. Now go back and copy paste your object, creating more object in the results array. Do this about 10 times so you have lots of results. Save, then go back and hit f5 and now you can see what a list of results should look like. Feel free to change a few of the values in the list if you'd like and you should see each of the results change individually.
