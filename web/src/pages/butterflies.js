import React from 'react';

const rawScript = `player = new JSMpeg.Player("ws://75.53.186.22:5565", {
  canvas: document.getElementById("canvas"), // Canvas should be a canvas DOM element
});`

const ButterfliesPage = () => (
  <html>
    <body>
      <canvas id="canvas"></canvas>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsmpeg/0.2/jsmpg.min.js"></script>
    <script dangerouslySetInnerHTML={{ __html: rawScript }}></script>
  </html>

);

export default ButterfliesPage;