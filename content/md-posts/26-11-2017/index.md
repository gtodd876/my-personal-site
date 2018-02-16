---
title: "Easy Cross Browser/OS/Device Development"
date: "11/26/2017"
tags: 
    - ngrok
---

## Vol. 5 of Developer Transformation - Thanksgiving Edition - 🦃 🍁 👨‍👩‍👦 💻

![virtual box screenshot](/images/virtualbox-optimized.png)
(running Windows 10, Ubuntu, Chrome on MacOS & iTerm on the same desktop!)

Thanksgiving is a time for family, lots of food, lots of diaper changes if you have an infant like me, and of course getting your personal portfolio finally off of your local drive and live on the internet! I have a lot to be thankful for this year and two huge items on that list are [Ngrok](https://ngrok.com/) and [Virtual Box](https://www.virtualbox.org/).

Being a web developer is difficult because we are expected to build a site or app that works well across different browsers, browsers on different OS'es, as well as various mobile devices with all different types of screen sizes! The possibilites are seemingly limitless.

Even though my personal site is a simple concept, I still wanted to use this opportunity to master something new in the process. I decided on CSS grid to manage the responsive layout(with a mix of flexbox). Grid is an amazing tool for responsive design and it looks pretty green on [CanIUse.com](https://caniuse.com/#search=grid) but I ended up finding out first hand how 'supported' doesn't neccessarily mean it is 'bug-free' across the board. Also, if you want to support more than the modern browsers than you need good fallbacks as well. ([Grid Bugs as of 11/27/17](https://github.com/rachelandrew/gridbugs))

Yes, you can do a lot of googling and take extensive notes about compatibilities - trusting the sources, deploying your app, and hoping for the best. But wouldn't be great if you could tighten the feedback loop with instant visual updates! Learn how to use CSS Grid on modern Chrome and Firefox and simultanouely see how the site responds on a "non-grid supporting" old android phone? It sounds like a dream but with an evening of your time you can make this your everyday developer life.

Ngrok is the first lifeline to the rescue! This easy to use utility exposes your local development server to the internet to simplify your mobile device testing. Setup was pretty straight forward:

1. Download the utility at https://Ngrok.com

2. If you are on Linux or Mac you can unzip it with the terminal command:

```sh
$ unzip /path/to/ngrok.zip
```

3. Done! Run the utility from the folder where ngrok resides

In my case I'm running terminal on a mac, and if you're lazy like me you just unzipped Ngrok in your downloads folder and haven't moved it yet. Let's say you are running your live development server on port 3000. (You need to be using something akin to the npm module [live-server](https://www.npmjs.com/package/live-server) or [webpack](https://webpack.js.org/concepts/hot-module-replacement/) with hot reload)
You would make sure you are within your downloads folder and then run:

```sh
$ ./ngrok http 3000
```

Your terminal screen's output should now resemble something of this nature:

![ngrok screenshot](/images/ngrok.png)

With this particular example and instance of ngrok, grab a mobile phone or tablet, open your favorite browser, (firefox is all the rage these days😜) and enter in the address:
http://7f45bc53.ngrok.io (your forwarding address will be different!)
Then you'll see your live server running on your mobile device. My mind was blown the first time I got this setup and I could tweak my css rules with so much more confidence! My wife has an iPad with an older iOS that does not support grid. That was immensly helpful in my situation!

Ok, so I can hear you saying, "f.u. Todd, I'm not rich and I don't own all these devices..." Well whether you do or you don't, you can also incorporate Virtual Box into your development environment.

Virtual Box is an operating system virtualization by oracle and the short of it is... if you can spare the extra disk space you can have virtual OS's like Win XP running Internet Explorer 6-11, Windows 10 running Edge, and even fire up linux with Ubuntu 16.0.4 each in their own respective windows!! (See example in first image at top of post)

If you really want to put your skills to the test you could use ngrok AND Virtual Box and then instantly be able to see the results of your code tweaks between IE 9 on WinXP, Edge on Windiws 10, Chrome on Mac, and Safari on your iPhone.

This is the good life now and there's no wanting to ever go back.

1. So run don't walk to https://www.virtualbox.org/ and pick the platform of your choice.

2. After downloading Virtual Box make sure to download the extension pack as well, which is right beneath the initial download. This provides drivers that will make the virtual box experience much more enjoyable.

![Virtual box's website](/images/vboxwebsite.png)

The next step will take a long time, as the script needs to download and install many test operating systems for you to be able to use Internet Explorer 6-11 and Edge on Windows.
As quoted from the repository:

> Microsoft provides virtual machine disk images to facilitate website testing in multiple versions of IE, regardless of the host operating system. With a single command, you can have IE6, IE7, IE8, IE9, IE10, IE11 and MSEdge running in separate virtual machines.

You can read all about it at:
https://github.com/xdissent/ievms

TL;DR ? ... The magic terminal command is:

```sh
$ curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS="10 11 EDGE" bash
```

Although this command did not work out of the gate or me, after reading through the issues at the repository I realized that I needed to install 'unar' with brew.

```sh
$ brew install unar
```

Once that was installed then the intial curl command ran flawlessly. (YMMV, of course)
I would run this command before the gym or before bed as it takes a while to download this many ISO's for the different operating systems. I would also make sure that you have an extra 12.5 gigs of space for the download and a fair amount more once you install the virtual machines.
![a virtual machine screenshot](/images/vmscreen.png)

At this point you simply select a machine on the left hand side of the window (for example: IE11 - Win7) and click the green start button to start the VM of the selected OS.

As you start running these VMs you should install the guest additions to use better graphics drivers. They can help fit the OS to the window and deal well with window resizing.

![Guest addtitions screenshot](/images/guestadditions.png)

Play around in wonderous amazement that IE6, IE7, IE8,9,10,11, and even Edge are just a few clicks away on your single machine!

After that magic feeling fades, you can get back to work and develop with confidence now knowing how your code will translate across all browsers!

The true power is in combining ngrok and Virtual Box to instantly see changes across all the IE's, Chrome, Firefox, Ubuntu...all the browsers, on all your devices.

[![Youtube video of Ngrok in action](https://img.youtube.com/vi/F5yEmBMHfMY/0.jpg)](https://www.youtube.com/watch?v=F5yEmBMHfMY)
(changing the color of my name is instantly changed in Chrome mobile on my phone & on Window 10's Edge browser...all on my macbook!)
