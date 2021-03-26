window.onload = () => {
  document.getElementById("attack").onclick = () => {
    chrome.extension.getBackgroundPage().attack();
  };

  document.getElementById("reload").onclick = () => {
    chrome.extension.getBackgroundPage().reload();
  };

  document.getElementById("move").onclick = () => {
    chrome.extension.getBackgroundPage().move();
  };
};
