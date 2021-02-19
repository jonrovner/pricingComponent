const range = document.querySelector('.slider');


function handleRange(){
    const pageViews = document.querySelector('.pageViews');
    const dollarMonth = document.querySelector('.dollarMonth');
    
    
    if (this.value < 20) {
        pageViews.innerHTML = "10K PAGEVIEWS";
        dollarMonth.innerHTML = "$8 / month";
    }else
    if (this.value < 40){
        pageViews.innerHTML = "50K PAGEVIEWS";
        dollarMonth.innerHTML = "$12 / month";
    }else
    if (this.value < 60) {
        pageViews.innerHTML = "100K PAGEVIEWS";
        dollarMonth.innerHTML = "$16 / month";
    }else
    if (this.value < 80) {
        pageViews.innerHTML = "500K PAGEVIEWS";
        dollarMonth.innerHTML = "$24 / month";
    }else
    if (this.value < 100) {
        pageViews.innerHTML = "1M PAGEVIEWS";
        dollarMonth.innerHTML = "$36 / month";
    }
}

range.addEventListener('change', handleRange);