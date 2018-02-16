---
title: "A is for Algorithms, APIs & Ajax"
author: "todd"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
date: "06/25/2017"
category: "tech"
tags: 
    - freecodecamp
    - jquery
    - ajax
---

## Vol. 2 of My Musician to Developer Transformation

It's no exaggeration when I say the speed of my progress on Free Code Camp went from 'light speed' to 'grandma learning to use Snapchat.' This is obviously by design as FCC shares this hilarious picture before you start your algorithms challenges.

![Kicked out of the nest](images/kicked-out.jpg)

If you look at [my FCC map](https://www.freecodecamp.com/gtodd876) you can see that I finished 117 exercises on Thursday, June 15th, 105 exercises on Friday, 18 items that Sunday, and then down to six by Monday the 19th. I was putting in the same amount of energy and time but the difficulty rose drastically by the time I reached the algorithmic section. Instead of being taught basic concepts we are asked to solve a problem. After making those required initial mental adjustments, I really started to enjoy these exercises! Initially it took a fair amount of thought to make progress towards the solution, but the resulting endorphin rush was much more intense when I was rewarded with that big ol' green box of happiness.

![Congratulatory message from Free Code Camp](/images/happy.png)

At this point, I had finally caught up in my progress with a long time friend and fellow audio engineer who is also a new Free Code Camper. After we had both completed an algorithm we would compare our work. It was really educational for us to have to understand each others code and to see how differently the problem could be solved! If you are learning to code and don't have somebody to chat with then I highly suggest searching out a local programming meetup group so you can discuss coding with others.

Take for example the **'Chunky Monkey'** exercise - where you need to write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

**Spoiler Alert!!** (Don't read any further if you're a current free code camper who hasn't finished the Basic algorithm section yet!)

Here's my solution:

```js
function chunkArrayInGroups(arr, size) {
  var twoDArray = [];
  var j = 0;

  for (var i = 0; i < arr.length; i + size) {
    twoDArray[j] = arr.splice(i, size);
    j++;
  }
  return twoDArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

And Greg's solution:

```js
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var mid1Arr = [];

  for (var i = 0; i < arr.length; i += size) {
    mid1Arr = arr.slice(i, i + size);
    newArr.push(mid1Arr);
  }

  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
```

You can see that we both accomplished the same task with Greg using the `slice` method while I used `splice`. Greg started with two arrays and I started with an array and an integer. This would spark discussion between us over which method we thought was more efficient or cleaner looking and it's great way to solidify what you just learned.

...As I'm typing this now a new bonus has emerged to making these blog posts. As I revisit these algorithms, it's very reassuring to see something that was so difficult just at the beginning of this week, seems so easy to understand now.

**Look Ma, No Hands!**

![Look Ma, No Hands!](/images/nohands.jpg)

Once I made it to this weekend I had finished up the algorithms and quickly traveled through the JSON, APIs, and Ajax section. These exercises didn't do much to explain the concepts and to complete them you basically copied the code they supplied into the code block to finish the assignment. I assume its purpose is to get you familiar with the look of jQuery in regards to dealing with Ajax and JSON files, and then you're expected to deepen your knowledge with 'The Google'. After watching a few videos about JSON and jQuery/ajax I was ready to start the next projects! It was great timing as I was done with the day job for the week and had lots of time to devote to coding.

I've knocked out three of the four Intermediate Front End Development projects so far this weekend. Most of them have been battles against and/or workarounds to get the required APIs to work. The main issue is that you're told to use [Code Pen](https://codepen.io/gtodd876/) to submit your work. As you start learning about APIs along with their associated api keys, and attempt to `GET` some JSON data, your console slaps you with a:

> XMLHttpRequest cannot load No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin https://s.codepen.io is therefore not allowed access.

Some would only see this as an opportunity to finally toss your laptop out of a 10th floor window, but it really was a good way to learn more about why this is happening. (Who wants to get one of those macs with soldered ram anyway, ewww) My understanding of it so far is that you're trying to get access to the API from a website that you do not own.

From Wikipedia's entry on **Same-origin Policy**

> In computing, the same-origin policy is an important concept in the web application security model. Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

This is a downside to using a service like Code Pen even though it is a nice development playground to quickly sketch up ideas. I learned to work around this issue by adding https://crossorigin.me/ to the beginning of your url. The other security issue is that many of these API's require a private key and it's a bad idea to store these private keys in your public code at Codepen.

Today I came across a couple forum posts that will solve these issues with my future FCC projects!

* First, it was great to learn that we're allowed to [download and use local JSON data](https://forum.freecodecamp.com/t/freecodecamp-challenge-guide-how-to-use-the-twitchtv-api/19541) for the next project that deals with [Twitch TV's](https://dev.twitch.tv/) API.

* Second, I found out that we can use [Github pages](https://pages.github.com/) to submit our projects! Yay, we aren't restricted to using Code Pen. I'm really excited to get back to tightening up my skills - building my projects locally with the Atom text editor (Mmmm auto-completion), Git, as well as continuing to level up my terminal skills. Once I have my project rocking, I just need to upload a branch named `gh-pages` and it can be viewed at http://_username_.github.io/_repository_ !

Here are links to the three projects I finished this weekend:

* [Random Quote Generator](https://codepen.io/gtodd876/pen/WOOqqa)
  * Press a button to see a new quote
  * Press a button to tweet out a new quote

- [Show the local weather](https://codepen.io/gtodd876/pen/rwzbZx/)
  * See the weather in your current location
  * Convert the temperature between Celsius/Fahrenheit
  * Different background image depending on temperature

* [Build A Wikipedia Viewer](https://codepen.io/gtodd876/pen/jwGEpo)
  * Search Wikipedia entries in a search box and see the resulting Wikipedia entries
  * Click a button to see a random Wikipedia article

As always, I'm happy to hear any feedback you have - good, bad, or ugly. If you've made it this far ... thank you for traveling with me on my developer journey!
