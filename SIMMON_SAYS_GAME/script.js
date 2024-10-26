// document.querySelector('.one').style.backgroundColor = ` rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
// document.querySelector('.two').style.backgroundColor = ` rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
// document.querySelector('.three').style.backgroundColor = ` rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
// document.querySelector('.four').style.backgroundColor = ` rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

let sys=[];

let user=[];

let btns=["one", "two", "three", "four"];

let start = false;

let level=0;

var heighScore=0;


document.addEventListener('keydown', (e)=>{
    if(start ===  false){
        console.log('started');
        leveUp();
        start= true;
    }

})

function leveUp() {
        user= [];
        level++;
        let s = document.querySelector('h3');
        s.innerText = `Level ${level} \n Heigh Score Is :=> ${highScore}`;

        let rb = Math.floor(Math.random() * 3);
        let rbc = btns[rb];
        sys.push(rbc);
        let rbv = document.querySelector(`.${rbc}`);
        btnFlash(rbv);
}

function btnFlash(btn) {
    
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 200);
}

function inpFlash()
{
    if(start == true ){
        btnFlash(this);
        user.push(this.classList[1]);
        check(user.length-1);
    }
    else{
        let s = document.querySelector('h3');
        s.innerText = ' Press Any Key First! ...';
    }
}

let bts= document.querySelectorAll('.btns');
for(bt of bts)
{
    
    bt.addEventListener('click', inpFlash);
}

function check(i) {
    if(sys[i] === user[i])
    {
        if(sys.length == user.length)
        {
            setTimeout(leveUp, 500);
        }
    }
    else
    {
        let s = document.querySelector('h3');
        s.innerHTML = `Game Over!... <br> Your Score Is :=> ${level-1} <br> Press Any Key To Start`;

        s= document.querySelector('body');
        s.classList.add("flashWrong");
        setTimeout(() => {
            s.classList.remove("flashWrong")
        }, 300);
        resetAll();
    }
}

function resetAll() {
    start= false;

    sys=[];
    user=[];
    highScore=level-1;
    level=0;
}

