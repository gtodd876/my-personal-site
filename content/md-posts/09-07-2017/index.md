---
title: "What the Regex?!?"
author: "todd"
cover: "https://unsplash.it/1280/900/?random?BigTest"
category: "tech"
date: "07/09/2017"
tags: 
    - regex
---

## Vol. 3 of My Musician to Developer Transformation

The past couple of weeks I have traversed what is called, "Intermediate Algorithm Scripting" on [Free Code Camp](https://www.freecodecamp.com/gtodd876).

One of the best feel-good moments during these challenges was the exercise called, [Spinal Tap Case](https://www.freecodecamp.com/challenges/spinal-tap-case). In addition to having a quote from the mockumentary masterpiece, Spinal Tap, this challenge gave some helpful links to Regex and String.prototype.replace(). The instructions state:

> Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

So if you enter the string, "This Is Spinal Tap" then your algorithm should spit out, "this-is-spinal-tap" ... or "AllThe-smallThings" should return "all-the-small-things."

At first, as I made adjustments to my 12 lines of code, I could only solve some of the test cases but not all. It was easy to replace the spaces with dashes, and convert all the characters to lower case but that only covers one test case. When I mentioned this challenge to my mentor he said that dedicating a day to learning regex would provide great a payoff with compound interest! Wow, I'm all about getting back more than you put in as that's usually never the case in the music industry :) He offered up some great links on regex for my adventure and I was pumped to know I was working on something that was really useful in the coding world.

The first link I checked out was Hugo Giraudel's blog post, [Learning Regular Expressions: The Practical Way](https://hugogiraudel.com/2015/08/19/learning-regular-expressions-the-practical-way/). He does an amazing job of explaining that a regular expression is just a sequence of characters that define a search pattern, no matter how gnarly it may seem. You start out with an expression as simple as :
`\[\w+]` and work your way till you get to:

> `\[[a-z][a-z0-9-]*([|*$^~]?=("[^"\n]*"|'[^'\n]*'|[^"'\s\]]+)(\s+i)?)?]` !!

![scary regular expression](/images/Fright.jpg)

Initially you don't understand all the character syntax so it seems insanely intimidating. There's nothing 'regular' about regular expressions. The trick to taming this beast though is breaking it down into small steps, section by section, without feeling like you need to rush through them. It doesn't take more than a few hours to build up some solid confidence and then start playing around with regex yourself.

After finishing Hugo's great tutorial I pointed my browser towards [Regexr](http://regexr.com/). It's an awesome tool that lets you copy/paste some data into their window and try out any regex combinations you can dream of to make the best character matches you can.

_Warning! Spoiler alert. If you're a Free Code Camper and haven't completed the "Spinal Tap" challenge then stop reading now. Come back after you've solved it, if you'd like to compare your code._
[Regexr Website](/images/regexr.png)

I copy/pasted all the test cases that I needed to pass into regexr's text window to create an amazingly tight feedback loop for my challenge. I messed around for awhile in this diverse character playground and eventually I was able to match everything I needed in one regex statement!

`/\_|\s|([a-z])([A-Z0-9])/g, '$1-$2'`

Let's get down with the break down:

1. the forward slash - `/` as the first character as well as the forward slash - `/` before 'g' - `/g` designates that everything between those forward slashes is regex - `/.../`. The `g` is an optional flag that states you want to match 'all cases globally' instead of only matching the 'first instance'.

2. `\_` - matches an underscore character,
   `|`- or `\s`-a space character `|`- or even a lower case character-`[a-z]` directly followed by an uppercase character or number-`[A-Z0-9]`.

3. The parentheses denote nested capture groups and are the secret sauce to this expression. First we wrap them around `[a-z]`, which says it is nested capture group #1 and then `[A-z0-9]` which means it is capture group #2. This allows you to later use `$1` and `$2` to reference capture group 1 & 2 respectively.

4. Replace - after the global flag and the comma, you then state which character you would like to replace your matches with, and I used '$1-$2'. That means that in between capture group 1 and 2 there a hyphen will be placed.

I brought this custom regular expression back to my challenge and my code looked like:

```
function spinalCase(str) {
  var separateCamelCase = str.replace(/\_|\s|([a-z])([A-Z0-9])/g, '$1-$2');
  return separateCamelCase.toLowerCase();
}
spinalCase('This Is Spinal Tap');
```

My mentor had mentioned that this was solvable in two lines, so I was excited when I sent him my code - proud of the day I spent learning regex...

...but after getting to see my code, my mentor informed me that my solution could easily be a one liner because there was no need for the temporary variable. I took that out, returned the replace() and what do you know.... BAM!!! ONE LINE SOLUTION!

```
function spinalCase(str) {
  return str.replace(/\_|\s|([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
}
spinalCase('This Is Spinal Tap');
```

...and was rewarded with the glorious green Free Code Camp success window.

[solo alt text](/images/solo.png)

Whoaaaa, How does Free Code Camp know I'm a recovering musician turned coder?!?
