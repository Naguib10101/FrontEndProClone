let ArrayOfCode = [
'&lt;!DOCTYPE html&gt;<br> &lt;html&gt; <br> &lt;head&gt; <br> &lt;title&gt; FrontendPro Sandbox &lt;/title&gt; <br> &lt;meta charset="UTF-8" /&gt; <br> &lt;/head&gt; <br> &lt;body&gt; <br> &lt;h1 id="app"&gt;Become a Pro in Frontend Dev with FrontendPro.dev! 🚀  &lt;/h1&gt; <br> &lt;button>Increase Your Skill Level: &lt; span id="level"&gt; 0 &lt;/span&gt; &lt;/button &gt; <br> &lt;script src="src/index.js"&gt;  &lt;/script&gt; <br> &lt;/body&gt; <br> &lt;/html>'
,"body {font-family: sans-serif;background-color:#1F2937;color: white;text-align: center;color: white; padding-top: 64px;} button {background-color: #4F46E5;transition: background-color 0.3s ease;color: white;padding: 12px;border: none;border-radius: 6px;font-weight: semi-bold;cursor: pointer;box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);}"
,"import ./styles.css; \n const button = document.querySelector(button) const level = document.querySelector(#level) button.addEventListener(click , () => { level.innerText++})"
];
let code = document.querySelector('.code');
let html = document.querySelector('.html');
let css  = document.querySelector('.css');
let js   = document.querySelector('.js');
let btn = document.querySelector('.btn');
let dropmenu = document.querySelector('.dropmenu');
let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let caret = document.querySelector(".caret");
let logo = document.querySelector('.forntend');
let counter = 1;

dropmenu.addEventListener('click' , ()=>{
    dropmenu.classList.toggle('show');
    if(dropmenu.classList.contains("show")) {
    item1.style.display="block";
    item2.style.display= "block";
    caret.classList.add("fa-caret-up");
    caret.classList.remove('fa-caret-down');
    }
    else{
    item1.style.display="none";
    item2.style.display= "none";
    caret.classList.add("fa-caret-down");
    caret.classList.remove('fa-caret-up');
    }
});

item2.addEventListener('click' , ()=>{
    window.open('./index2.html','_self');
});

logo.addEventListener('click' , ()=>{
    window.open('./index.html','_self');
});


html.addEventListener('click' , ()=>{
    code.innerHTML = ArrayOfCode[0];
})
css.addEventListener('click' , ()=>{
    code.innerHTML = ArrayOfCode[1];
    code.style.height = "280px";
})
js.addEventListener('click' , ()=>{
    code.innerHTML = ArrayOfCode[2];
})
btn.addEventListener("click" , ()=>{
    btn.innerHTML = "Increase Your Skill Level : " + ++counter;
});