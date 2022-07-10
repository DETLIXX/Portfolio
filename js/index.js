if (navigator.appVersion.indexOf("Win") != -1) {
    console.log("On Windows");
    window.location.href= `index.html`;
}
if (navigator.appVersion.indexOf("Mac") != -1) {
    console.log("On MacOs");
    window.location.href= `index.html`;
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    window.location.href= `mobile.html`;
}