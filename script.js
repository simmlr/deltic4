var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json',
    rendererSettings: {
        filterSize: {
          width: '200%',
          height: '200%',
          x: '-50%',
          y: '-50%',
        }
      }
})