import React from 'react';

const ButterfliesPage = () => (
  <html>
    <body>
      <canvas id="canvas"></canvas>
    </body>

    <script type="text/javascript" src="jsmpeg.min.js"></script>
    <script type="text/javascript">
      {
        player = new JSMpeg.Player("ws://75.53.186.22:5565", {
          canvas: document.getElementById("canvas"), // Canvas should be a canvas DOM element
        })
      }
    </script>
  </html>

);

export default ButterfliesPage;