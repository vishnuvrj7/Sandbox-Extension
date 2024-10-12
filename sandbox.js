window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    if (url) {
      const frame = document.getElementById('sandboxFrame');
      frame.src = url;
      
      // Prevent downloads
      frame.addEventListener('load', () => {
        frame.contentWindow.addEventListener('beforeunload', (event) => {
          event.preventDefault();
          event.returnValue = '';
        });
      });
    }
  };