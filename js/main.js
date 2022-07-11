const toggleContainer = document.querySelector('.toggle');
const toggleBtn = toggleContainer.querySelector('.btn');
const annualPrices = document.querySelectorAll('.annual-price');
const monthlyPrices = document.querySelectorAll('.monthly-price');


// toggle btn set to anual plan
// switch to monthly plan when clicked for the first time
toggleBtn.addEventListener('click', switchToMonthly);


function switchToMonthly(e) {
    toggleBtn.removeEventListener('click', switchToMonthly);
    toggleBtn.addEventListener('click', switchToAnnually);
    animateBtn('monthly');
    showPrices('monthly');
}


function switchToAnnually(e) {
    toggleBtn.removeEventListener('click', switchToAnnually);
    toggleBtn.addEventListener('click', switchToMonthly);
    animateBtn('annually');
    showPrices('annually');
}


function animateBtn(plan) {
    if (plan === 'monthly') {
        toggleBtn.classList.add('move-right');      
          
    } else if (plan === 'annually') {
        toggleBtn.classList.remove('move-right');        
    }
}


function showPrices(plan) {
    if (plan === 'monthly') {
        annualPrices.forEach(price => {
            price.classList.remove('show');
        })
        monthlyPrices.forEach(price => {
            price.classList.add('show');
        })

    } else if (plan === 'annually') {
        monthlyPrices.forEach(price => {
            price.classList.remove('show');
        })
        annualPrices.forEach(price => {
            price.classList.add('show');
        })
    }
}