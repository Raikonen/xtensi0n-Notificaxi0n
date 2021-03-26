function attack() {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      chrome.tabs.remove(tab.id);
    });
  });
}
