window.onload = () => {
  document.getElementById("attack").onclick = () => {
    chrome.extension.getBackgroundPage().attack();
  };
};
