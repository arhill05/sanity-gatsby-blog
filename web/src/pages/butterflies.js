import React from 'react';
import '../lib/jsmpeg.min.js';

const rawScript = `player = new JSMpeg.Player("ws://75.53.186.22:5565", {
  canvas: document.getElementById("canvas"), // Canvas should be a canvas DOM element
});`

const ButterfliesPage = () => (
  <html>
    <body>
      <canvas id="canvas"></canvas>
    </body>
    {/* <script src={"jsmpeg.min.js"}></script> */}
    <script dangerouslySetInnerHTML={{ __html: rawScript }}></script>
  </html>

);

export default ButterfliesPage;