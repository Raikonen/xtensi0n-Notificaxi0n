window.onload = function () {
  document.getElementById("attack").onclick = function (event) {
    chrome.extension.getBackgroundPage().attack();
  };
};
