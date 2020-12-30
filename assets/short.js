chrome.tabs.query({ active: true, currentWindow: true, lastFocusedWindow: true }, (e) => {
  const nowurl = e[0].url;
  $("#url").val(e[0].url);
  console.log(nowurl);
  function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
 }
 $('.shbut').on('click', function() {
    var urlval=$("#url").val();
    location.href="https://u.furcht968.ml/shoten_wapi.php?url="+urlval+"&resp="+location.href;
  });
  if (getParam("status")=="ok") {
    $(".url").html("短縮化に成功しました！<br>https://u.furcht968.ml/"+getParam("shoten"));
  }
});