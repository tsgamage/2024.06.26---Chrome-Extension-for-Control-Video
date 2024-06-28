document.getElementById('playPause').addEventListener('click', () => {
    sendMessageToContentScript({ command: 'playPause' });
  });
  
  document.getElementById('rewind').addEventListener('click', () => {
    sendMessageToContentScript({ command: 'rewind' });
  });
  
  document.getElementById('fastForward').addEventListener('click', () => {
    sendMessageToContentScript({ command: 'fastForward' });
  });
  
  function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: executeContentScript,
        args: [message]
      });
    });
  }
  
  function executeContentScript(message) {
    window.postMessage(message, "*");
  }
  