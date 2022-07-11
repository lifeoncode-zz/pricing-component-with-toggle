const toggleContainer = document.querySelector('.toggle');
const toggleBtn = toggleContainer.querySelector('.btn');

// toggle btn set to anual plan
// switch to monthly plan when clicked for the first time
toggleBtn.addEventListener('click', switchToMonthly);


function switchToMonthly(e) {
    toggleBtn.removeEventListener('click', switchToMonthly);
    toggleBtn.addEventListener('click', switchToAnnually);
    animateBtn('monthly');
}


function switchToAnnually(e) {
    toggleBtn.removeEventListener('click', switchToAnnually);
    toggleBtn.addEventListener('click', switchToMonthly);
    animateBtn('annually');
}


function animateBtn(plan) {
    if (plan === 'monthly') {
        toggleBtn.classList.add('move-right');      
          
    } else if (plan === 'annually') {
        toggleBtn.classList.remove('move-right');        
    }
}