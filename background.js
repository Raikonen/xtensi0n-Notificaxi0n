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
