<!-- ![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# JS | Async & Callbacks -->
<h2 class="raw">Learning Goals</h2>
<p>After this lesson you will be able to:</p>
<ul>
<li class="raw">understand the concepts of <strong>synchronous</strong> and <strong>asynchronous</strong> code and what is the difference between them,</li>
<li class="raw">understand what a <strong>callback function</strong> is,</li>
<li class="raw">understand how <em>async</em> functions execute callbacks,</li>
<li class="raw">use the <code>setTimeout()</code> and <code>clearTimeout()</code> methods and</li>
<li class="raw">use the <code>setInterval()</code> and <code>clearInterval()</code> methods.</li>
</ul>
<h2 class="raw">Introduction</h2>
<p>Let&rsquo;s start with the most common interview question:</p>
<p><img class="emoji" alt=":question:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/question.png" /> <em>Interviewer</em>: &ldquo;Hi! Welcome to the job interview. To warm up, can you please tell me all you know about <em>JavaScript and synchronicity</em>? Why do we say JavaScript is <em>asynchronous language</em>?&rdquo;</p>
<p><img class="emoji" alt=":loudspeaker:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/loudspeaker.png" /> <em>You</em>: &ldquo;Thank you so much for giving me a chance and I&rsquo;m going to start from your second question and make a small correction, which you probably did purposely to test me - <strong>JavaScript is not an asynchronous language, but synchronous one with some asynchronous behaviors</strong>.&rdquo;</p>
<h2 class="raw">Synchronicity and Asynchronicity</h2>
<p>A good approach to understanding these two behaviors is to use an example from real life. Suppose you are at home. You are hungry, and you have to do the dishes, organize your bedroom, and call your significant other. <strong>You can&rsquo;t do all the things at the same time!</strong></p>
<p>If you would do it in a <strong>synchronous</strong> manner, you would:</p>
<ol>
<li class="raw">prepare something to eat</li>
<li class="raw">do the dishes</li>
<li class="raw">organize your bedroom</li>
<li class="raw">do whatever is next on your list.</li>
</ol>
<div class="alert alert-info">
<p>This means that each of these activities would take some time and all the others would have to wait till you&rsquo;re done with the previous.</p>
</div>
<p>This process would take a looonggg time, or better saying, much longer than if we would take the <em>asynchronous</em> approach.</p>
<p>If we would do all the above <strong>asynchronously</strong>, it would look like:</p>
<ul>
<li class="raw">order something to eat</li>
<li class="raw">while waiting first clean all the dirty dishes</li>
<li class="raw">then organize the room</li>
<li class="raw">food is here <img class="emoji" alt=":+1:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/+1.png" /></li>
</ul>
<!-- <iframe src="//giphy.com/embed/iJa6kOfJ3qN7a" width="480" height="413" class="giphy-embed" allowfullscreen></iframe><p><a href="http://giphy.com/gifs/pizza-iJa6kOfJ3qN7a">via GIPHY</a></p> -->
<p>This is what we could consider an <strong>async method</strong> and a <strong>callback function</strong>.</p>
<p>Calling the restaurant to order the meal (the <em>async method</em> in this example) will allow you to work on other stuff while you are waiting for the food. Once you get the food, you briefly pause what you&rsquo;re doing to receive it. The interruption is the <em>callback function</em>.</p>
<h3 class="raw">JavaScript and (a)synchronicity</h3>
<div class="alert alert-info">
<p><img class="emoji" alt=":trophy:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/trophy.png" /> <em>Potential Interview questions</em>: <strong>JavaScript, at its core, is a single-threaded and synchronous language</strong>, and this means next:</p>
<ul>
<li class="raw"><a href="https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading"><strong>single-threaded</strong></a> - <strong>only one block of code is executed at the time</strong>. You can imagine this as there&rsquo;s always one single actor in the play - ex. you were alone at home in the above example, so only you could&rsquo;ve worked on all these tasks. There&rsquo;s no one else who can do it simultaneously at the same time as you. This means that if you (JavaScript engine) work quickly enough and can switch between tasks efficiently enough, you will manage to finish all the tasks like you had a friend or more of them helping you (but remember, in JS case, this is impossible - always one operation at the time - forget about friend&rsquo;s help when you&rsquo;re JavaScript. <img class="emoji" alt=":stuck_out_tongue_winking_eye:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/stuck_out_tongue_winking_eye.png" /> )</li>
<li class="raw"><strong>synchronous</strong> - <strong>the code gets executed line by line, from top to bottom, in the order in which they are put in</strong> - line 2 can&rsquo;t get executed before line 1, line 3 can&rsquo;t get executed before line 2, and so on.</li>
</ul>
</div>
<p><img class="emoji" alt=":question:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/question.png" /> Okay, now you might ask, if JavaScript is <em>synchronous</em> language, how do we get to deal with <em>asynchronicity</em> at all? And this is a valid question, so let&rsquo;s demystify this concept a bit.</p>
<h2 class="raw">Async &amp; Callbacks</h2>
<h3 class="raw">Asynchronous Programming</h3>
<p>Unlike the previous statements, where synchronous programs run line by line from top to bottom, <strong>in asynchronous programs it is possible to have code on line 1 scheduled to be run at some point in the future so in the meantime, code on lines 2,3, and so on can run</strong>.</p>
<p>We can imagine that our &ldquo;code in line 1&rdquo;, which is scheduled to be run in the future, is some super <em>time-inefficient</em> activity, like getting thousands of objects with users&rsquo; data from some external API. If we ran this program synchronously, the whole app execution would stop until all the data is loaded and then we could proceed to lines 2, 3, 4, &hellip; Doesn&rsquo;t really make sense, you would agree?</p>
<p>To conclude:</p>
<div class="alert alert-success">
<p><a href="https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)"><strong>Asynchronous programming</strong></a> helps us to avoid performance bottlenecks and <strong>enhance the responsiveness of our applications</strong>. It is especially useful to execute other functions while you wait until a costly function finishes. We usually <strong>use async when we have to execute functions that will take an unpredictable amount of time to finish</strong>.</p>
</div>
<p>For example:</p>
<pre><code class="javascript hljs raw">function getFirstElementOfArray(array) {
  return array[0];
}

const array = ['Madrid', 'Barcelona', 'Miami'];
const firstElement = getFirstElementOfArray(array);

console.log(firstElement); // &lt;== Madrid
</code></pre>
<p>The execution of this function obviously won&rsquo;t be so expensive in terms of time, so it doesn&rsquo;t have to be async. Let&rsquo;s take a look at a different example:</p>
<pre><code class="javascript hljs raw">// hypothetical example

function readFile(file) {
  // read the file
  return contentFile.length;
}

const textSize = readFile('odyssey.txt');
console.log(textSize); // =&gt; undefined
</code></pre>
<p>If the file we want to read is a huge book like the <a href="https://en.wikipedia.org/wiki/Odyssey">Odyssey</a>, which has around 120.000 words, this operation will be more expensive in terms of time.</p>
<p>The problem is - we will have to pause the execution of the rest of the code until this is done. To fix it, we will have to write <strong>an async function.</strong></p>
<div class="alert alert-info">
<p><strong>Async functions allow us to continue executing our code while the async function is being executed in the background</strong>. What this exactly means is: our users will be able to use the app while the data is loading, otherwise, our app would be irresponsive and this would cause a bad user experience.</p>
</div>
<!-- <iframe src="//giphy.com/embed/4pMX5rJ4PYAEM" width="480" height="357" class="giphy-embed" allowfullscreen></iframe><p><a href="http://giphy.com/gifs/homer-simpson-the-simpsons-bush-4pMX5rJ4PYAEM">via GIPHY</a></p> -->
<p>Let&rsquo;s take a look at this example:</p>
<pre><code class="javascript hljs raw">normalFunction(); // =&gt; "hi", takes 0.1s
asyncFunction(); // =&gt; "there", takes 4s
normalFunction2(); // =&gt; "ironhackers", takes 0.1s
</code></pre>
<p>The result of the code above will be:</p>
<pre><code class="text hljs raw">"hi"
"ironhackers"
"there"
</code></pre>
<p>What would we do if we needed the value of an <em>asyncFunction()</em> as an argument in another function?</p>
<p>Suppose we want to concat these three values, passing the outputs as arguments to the next function:</p>
<pre><code class="javascript hljs raw">//     |------------------------------|
//     |                              |
const text1 = normalFunction(); //    |
//                             -------
//                            |
//                            V
const text2 = asyncFunction(text1);
//     |
//     |------------------------|
//                              |
//                              V
const text3 = normalFunction2(text2);

console.log(text3);
</code></pre>
<p>The output may be something different than we expect:</p>
<pre><code class="text hljs raw">"hi undefined there"
</code></pre>
<p>The <code>asyncFunction()</code> takes 4 seconds to be executed, while the other two functions need only 0.1 seconds. The system doesn&rsquo;t know the returned value from the <code>asyncFunction()</code> until it finishes its execution.</p>
<!-- This brings us to our next topic, which we covered slightly in the [Functions](http://learn.ironhack.com/#/learning_unit/6377) lesson, but here we will dig a bit deeper. -->
<h3 class="raw">Callback Function</h3>
<p><img class="emoji" alt=":heavy_check_mark:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/heavy_check_mark.png" /> The <strong>callback function</strong> contains the code that will be executed when the async function finishes its execution. The syntax to define this function will change depending on the async function.</p>
<p>We will understand callbacks better by taking a look at our first _async methods: <code>setTimeout()</code> and <code>setInterval()</code>.</p>
<h2 class="raw"><code>setTimeout()</code></h2>
<div class="alert alert-success">
<p><code>setTimeout()</code> sets a timer that executes a callback function once the timer expires.</p>
</div>
<div class="alert alert-info">
<p>Syntax:</p>
<pre><code class="javascript hljs raw">const timeoutId = setTimeout (callbackFunction [, 'delay]);
</code></pre>
<p>Parameters:</p>
<ul>
<li class="raw"><code>callbackFunction</code>: the function that will be executed once the timer expires</li>
<li class="raw"><code>delay</code> (optional): the time (in milliseconds) the timer should wait before the given callback function is executed</li>
</ul>
<p>The method returns a numeric <code>timeoutId</code>, which identifies the timer created by the call to <code>setTimeout()</code>.</p>
<p>We can cancel the timeout by passing this <code>id</code> to the <code>clearTimeout()</code> method.</p>
</div>
<p>Let&rsquo;s take a look at the following example to see how <code>setTimeout()</code> works. You can try this code in a new <a href="https://repl.it">Repl.it</a> note:</p>
<pre><code class="javascript hljs raw">// ES5
function someCallbackFunction() {
  console.log('Hey there, Ironhackers!');
}
const timeoutId = setTimeout(someCallbackFunction, 1000);
</code></pre>
<p>After one second, in the console, it will print &ldquo;Hey there, Ironhackers!&rdquo;. <strong>Cool, huh? </strong></p>
<p>Let&rsquo;s try to change the delay and set it up to five seconds.</p>
<pre><code class="javascript hljs raw">const timeoutId = setTimeout(someCallbackFunction, 5000);
</code></pre>
<p>Okay, so now the message will be shown five seconds after calling the function. Let&rsquo;s create the timer and avoid the execution of the callback function by doing the following:</p>
<pre><code class="javascript hljs raw">const timeoutId = setTimeout(someCallbackFunction, 5000);

clearTimeout(timeoutId);
</code></pre>
<p><em>Sidenote</em>: You might see this way of writing <code>setTimeout()</code> much often:</p>
<pre><code class="javascript hljs raw">// ES5
const timeoutId = setTimeout(function () {
  console.log('Hey there, Ironhackers!');
}, 1000);

// ES6
const timeoutId = setTimeout(() =&gt; {
  console.log('Hey there, Ironhackers!');
}, 1000);
</code></pre>
<p>We broke it into 2 steps previously just to make it more clear how it is a callback really.</p>
<p><img class="emoji" alt=":pencil:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/pencil.png" /> <strong>Time to practice</strong></p>
<p>Let&rsquo;s create a counter that will print a number in a sequence each second.</p>
<pre><code class="javascript hljs raw">let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  setTimeout(callbackFunction, 1000);

  counter += 1;
};

let timeoutId = setTimeout(callbackFunction, 1000);
</code></pre>
<p>Could you stop the counting with the <code>clearTimeout()</code> method? No! Every time the callback function is executed, a new timeoutId is created but we are not saving it.</p>
<p>Let&rsquo;s modify the code above to stop the timeout after 10 iterations.</p>
<pre><code class="javascript hljs raw">let counter = 1;
const callbackFunction = function () {
  console.log(counter);
  timeoutId = setTimeout(callbackFunction, 1000);

  counter += 1;

  if (counter &gt; 10) {
    clearTimeout(timeoutId);
  }
};

let timeoutId = setTimeout(callbackFunction, 1000);
</code></pre>
<p>Though the code above works executing the function every second, <strong>not everything that works is a good solution</strong>. In this case, we are using <code>setTimeout()</code> to do something that we could better do with another method: <code>setInterval()</code>.</p>
<h2 class="raw"><code>setInterval()</code></h2>
<div class="alert alert-success">
<p><code>setInterval()</code> calls a function repeatedly with a fixed delayed time between each call.</p>
</div>
<div class="alert alert-info">
<p>Syntax:</p>
<pre><code class="javascript hljs raw">const intervalId = setInterval(callbackFunction, delay);
</code></pre>
<p>Parameters:</p>
<ul>
<li class="raw"><code>callbackFunction</code>: the function that will be executed once the timer expires</li>
<li class="raw"><code>delay</code>: the time (milliseconds) the timer should delay in between executions of the specified callback function</li>
</ul>
<p>The method returns a numeric <code>intervalId</code>, which identifies the timer created by the call to <code>setInterval()</code>.</p>
<p>We can cancel the interval by passing this <code>id</code> to the <code>clearInterval()</code> method.</p>
</div>
<p>The usage is very similar than <code>setTimeout()</code>. Now we can create the counter from the example above as follows:</p>
<pre><code class="javascript hljs raw">let i = 1;
const intervalId = setInterval(function () {
  console.log(i);

  i++;

  if (i &gt; 10) {
    clearInterval(intervalId);
  }
}, 1000);
</code></pre>
<p><img class="emoji" alt=":pencil:" src="https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/pencil.png" /> <strong>Time to practice</strong></p>
<p>Let&rsquo;s do a reverse countdown from 10 to 0. When the countdown is zero, it should show &ldquo;Pop!&rdquo; and stop the interval.</p>
<pre><code class="javascript hljs raw">let i = 10;
const intervalId = setInterval(function () {
  if (i &gt; 0) {
    console.log(i);
  } else {
    console.log('Pop!');
    clearInterval(intervalId);
  }

  i--;
}, 1000);
</code></pre>
<div class="alert alert-info">
<p>While <code>setTimeout()</code> executes the function just once, <code>setInterval()</code> executes the given function repeatedly until the <code>clearInterval()</code> function is called.</p>
</div>
<p>A bit later in the course, we will cover other ways to deal with the asynchronicity of JavaScript such are <em>promises</em> and <em>async/await</em>.</p>
<h2 class="raw">Summary</h2>
<div class="alert alert-info">
<p><em>Potential Interview questions</em>: <strong>What is the difference between synchronous and asynchronous code in JavaScript?</strong> In short, <strong>synchronous</strong> means the operation needs to be executed in a certain order, and each operation has to wait for the previous one to complete.</p>
<p><strong>Asynchronous</strong> means the opposite of the previous - an operation can occur while another operation is still being processed.</p>
</div>
<p>Async JavaScript allows us to execute time-consuming functions without blocking the rest of our code. Once the async function finishes, the callback function is executed.</p>
<p>We have also learned two different methods to perform tasks with a delay. <strong><code>setTimeout()</code> will execute a function with a delayed time just once</strong>. <strong><code>setInterval()</code> will execute a function repeatedly with a fixed delayed time between each call</strong>.</p>
<h2 class="raw">Extra Resources</h2>
<ul>
<li class="raw"><a href="https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/">Understanding Synchronous and Asynchronous JavaScript &ndash; Part 1</a></li>
<li class="raw"><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout">MDN Documentation - setTimeout</a></li>
<li class="raw"><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval">MDN Documentation - setInterval</a></li>
<li class="raw"><a href="http://callbackhell.com/">Callback hell example</a></li>
</ul>
