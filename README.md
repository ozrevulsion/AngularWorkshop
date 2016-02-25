# The basics of Angular
###### Everything you ever wanted to know about building a front end to the app we've been building in the workshops.

## What's in here?
In this repository you will find the code for the workshop that I will be running on the 26th of Feb, 2016. You will notice that there are number of folders marked as Stages. In each stage folder you will find the code in a state of completion that I will make a note of during the workshop. If at any stage you get lost or something doesn't work, Don't Panic! Just get listen to the rest of what I'm saying and wait for me to tell you when we are at the next stage and you can pick up from there.

## Stage 1

This stage has the basic layout for the app that we are going to be building which I've named "Talkative". This app's sole purpose in life is going to be to use Angular to speak with the routes we defined in our Nancy framework and interpret the results and feed them back to the user. Hopefully this will be where you begin and end. Pick this up and we can start making changes to it.

This stage has nothing in it except this layout but it's worth taking a moment to look over the layout. There are a couple of things to note:

1. On the panel itself I am using a media query to attempt to add the first steps towards being responsive and mobile ready. If you use the Chrome device emulator you will notice this still looks kind of nice on mobile devices and if you resize the screen it more or less always looks good. This is thanks to the media query and also the fact that I have used percentage sizing where appropriate.
1. I have used a couple of new CSS3 properties which are becoming more widely supported across all browsers and require less vendor prefixes these days. Things like border-radius, box-shadow and most excitingly flex-box! All these properties are worth getting comfortable with now because it should only be a year or two before these have full adoption in browsers and if you don't know them then you'll be behind!
1. I've opted for a four colour scheme being a background color (#444), a secondary background color (#eee), a main color (#6bc997) and an accent color (#c96b9d). It's advisable that you don't use more colours than this if it can be avoided because it makes your site look too busy and harsh on the eye. Notice I haven't used any solid blacks or whites, these colours are harsh to the eye. Think of looking at snow that has a bright sun shining on it, not pleasant yeah?
