function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
} 


const first=document.querySelector('#first');
first.innerHTML=`<td>Browser Name<td><td>${detectBrowser()}<td>`;

const second=document.querySelector('#second');
second.innerHTML=`<td>Browser Version<td><td>${navigator.appVersion}<td>`;

const third=document.querySelector('#third');
third.innerHTML=`<td>Browser width<td><td>${screen.width}<td>`;

const fourth=document.querySelector('#fourth');
fourth.innerHTML=`<td>Browser height<td><td>${screen.height}<td>`;

