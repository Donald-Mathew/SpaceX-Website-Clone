

const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted =false;

/* let scrollStarted = false;


btn.addEventListener('click', navToggle);
document.addEventListener('scroll',scrollPage);
 */

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle() {
    overlay.classList.toggle('overlay-show')
    btn.classList.toggle('open')
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}

function scrollPage() {
    const scrollPos = window.scrollY;

if(scrollPos > 100 && !scrollStarted ) {
    countUp();
     
    scrollStarted = true;

} else if(scrollPos < 100  && scrollStarted ) {
    reset();
    scrollStarted = false;
}
}


function countUp() {
  counters.forEach((counter) => {  //iterating through the counters 
      counter.innerText = '0';

      const updateCounter = () => {
        const target = +counter.getAttribute('data-target')   //getting each data-target attribute  from the classes counter and the result is 3,7 and 4

        //getting the current counter value 
           const c = +counter.innerText;

         //create an increment
        const increment = target / 100;

        //if counter is less than the target,add  the increment 
        if (c < target ) {
            //round up and set the counter value 
            counter.innerText = `${Math.ceil(c + increment )}`

            setTimeout(updateCounter, 75)
        } else {
            counter.innerText = target; 
        }

      };
   updateCounter()
  });
}

function reset() {
    counters.forEach((counter) =>{
        counter.innerHTML = '0';
    });
} 

 
