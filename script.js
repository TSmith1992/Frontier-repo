const h2 = document.createElement('h2');
h2.textContent = "This content added by JavaScript"; 

document.querySelector('body').appendChild(h2); 

const btn=document.getElementById('button');

btn.addEventListener('click',function(){
    if (btn.style.backgroundColor=''){
        btn.style.backgroundColor='#27647B';
    }else btn.style.backgroundColor='green';
});
