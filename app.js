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

  document.getElementById("create-tab").onclick = () => {
    chrome.extension.getBackgroundPage().createTab();
  };

  document.getElementById("create-window").onclick = () => {
    chrome.extension.getBackgroundPage().createWindow();
  };

  document.getElementById("download").onclick = () => {
    chrome.extension.getBackgroundPage().download();
  };
};
