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

  document.getElementById("open").onclick = () => {
    chrome.extension.getBackgroundPage().open();
  };

  document.getElementById("open-one").onclick = () => {
    chrome.extension.getBackgroundPage().openOne();
  };

  document.getElementById("reload-all").onclick = () => {
    chrome.extension.getBackgroundPage().reloadAll();
  };
};
