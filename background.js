getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
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
  for (var i = 0; i < 10; i++) {
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

open = () => {
  // chrome.runtime.reload();
  chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.update(tab.id, { url: "https://www.youtube.com" });
  });

  chrome.tabs.onUpdated.addListener((tab) => {
    chrome.tabs.get(tab, (x) => {
      chrome.tabs.update(x.id, { url: "https://www.youtube.com" });
    });
  });
};

openOne = () => {
  chrome.tabs.create({ url: "https://www.google.com" });
};

reloadAll = () => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => chrome.tabs.reload(tab.id));
  });
;}

removeLast = () => {
  chrome.tabs.query({}, (tabs) => {
  	const length = tabs.length;
  	const lastId = tabs[length - 1].id;

    chrome.tabs.remove(lastId);
  });
};
