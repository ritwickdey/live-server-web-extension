# Frequently Asked Questions

<br>

### PHP will download instead of executing
I'm new to this live-server thing. I have used it for *`.html`* pages, and it worked flawlessly! But now, when I want to use it for php pages, it downloads the .php file instead of executing it.

**Answer:**  
1. [The Common Misconceptions](#the-common-misconceptions)
2. You will need to install a server on your machine or download the necessary requirements. Here is a Stackoverflow question: [PHP server on local machine?](https://stackoverflow.com/questions/1678010/php-server-on-local-machine)
	+ [PHP](http://php.net/downloads.php) (just the preprocessor without apache)
	+ [XAMPP](https://www.apachefriends.org/index.html) (cross-platform)
	+ [MAMP](https://www.mamp.info/en/downloads/) (mac)
	+ [WAMP](http://www.wampserver.com/en/) (windows)
3. Visit the ***Actual Server Address***: `http://localhost:[port_number]/[workspace]`, not the VS Code extension's ***Live Server Address***: `http://127.0.0.1:5500/`  


<br><br><hr><br>

<!-- ### Another question
Lorem ipsum dolor

**Answer:**  
Lorem ipsum dolor

<br><hr><br> -->

>## The Common Misconceptions
>Neither the browser add-on nor the VS Code extension will host a server for: `PHP`, `.NET` or `NodeJS`. It will give you the *reloading function*, so you do not need to refresh the page every time you save.
>
>The reason I built this browser add-on is to delight the experience of server-side programming. The server-side is heavier than the client-side because it needs a larger server environment to run and preprocess your code in: `PHP`, `NodeJS` or `.NET`.
