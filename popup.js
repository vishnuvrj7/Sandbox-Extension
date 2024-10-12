document.getElementById('openButton').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;
    if (url) {
      chrome.windows.create({
        url: 'sandbox.html?url=' + encodeURIComponent(url),
        type: 'popup',
        width: 1024,
        height: 768
      });
    }
  });