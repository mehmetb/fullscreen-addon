(function main() {
  if (window.hasRun) {
    return;
  }

  // Running for the first time here
  window.hasRun = true;

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen()
        .catch(() => {
          document.addEventListener('click', toggleFullScreen, { once: true });
          alert('Please click on the page to toggle fullscreen mode.');
        });
    } else {
      document.exitFullscreen();
    }
  }

  window.addEventListener('keydown', (e) => {
    console.info({ e });
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'k') {
      toggleFullScreen();
    }
  });
}());