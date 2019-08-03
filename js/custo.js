
window.onload = function onBodyLoad() {

    const counterBody = document.getElementById('counter-body'); // counter1 store the span tag

    const counterVisibilityTracker = setInterval(function () {
        if (counterBody.offsetTop === 16) {
            counterFunction();
            clearInterval(counterVisibilityTracker);
        }
        if (window.scrollY > counterBody.offsetTop / 2) {
            counterFunction();
            clearInterval(counterVisibilityTracker);
        }
    }, 1)

    function counterFunction() {
        const counter1 = document.getElementById('counter_1'); // counter1 store the span tag
        const counter2 = document.getElementById('counter_2'); // counter1 store the span tag
        const counter3 = document.getElementById('counter_3'); // counter1 store the span tag
        const intialCounter1Value = parseInt(counter1.innerHTML); // intialCounter1Value store the value of span 
        const intialCounter2Value = parseInt(counter2.innerHTML); // intialCounter1Value store the value of span 
        const intialCounter3Value = parseInt(counter3.innerHTML); // intialCounter1Value store the value of span 
        let c1 = 0;
        let c2 = 0;
        let c3 = 0;
        counter1.innerHTML = c1; // putting the value zero in the span tag
        counter2.innerHTML = c2; // putting the value zero in the span tag
        counter3.innerHTML = c3; // putting the value zero in the span tag

        //setInterval is hit the function again an again
        const interval = setInterval(function () {
            let allConditionsFulfilled = true;
            if (c1 <= intialCounter1Value) {
                counter1.innerHTML = c1++;
                allConditionsFulfilled = false;
            }
            if (c2 <= intialCounter2Value) {
                counter2.innerHTML = c2++;
                allConditionsFulfilled = false;
            }
            if (c3 <= intialCounter3Value) {
                counter3.innerHTML = c3++;
                allConditionsFulfilled = false;
            }
            if (allConditionsFulfilled === true) {
                clearInterval(interval); // clearInterval stop calling the function
            }
        }, 1)

    }
}