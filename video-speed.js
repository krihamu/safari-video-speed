(() => {
  const video = document.querySelector('video');
  if (!video) return alert('未找到视频');

  const speed = video.playbackRate === 3 ? 1 : 3;
  video.playbackRate = video.defaultPlaybackRate = speed;
  alert('已切换到 ' + speed + ' 倍速');
})();
