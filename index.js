if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return;
}
else { 
    console.log("Pc Version")
    window.location.href = 'index.html';
}
