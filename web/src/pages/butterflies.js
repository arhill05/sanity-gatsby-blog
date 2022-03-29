import React from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';

const ButterfliesPage = () => (
  <html>
    <body>
      <div id="player"></div>
    </body>

    <script type="text/javascript">
      {
        new JSMpeg.VideoElement('#player', "ws://75.53.186.22:5565")
        // player = new JSMpeg.Vid("ws://75.53.186.22:5565", {
        //   canvas: document.getElementById("canvas"), // Canvas should be a canvas DOM element
        // })
      }
    </script>
  </html>

);

export default ButterfliesPage;