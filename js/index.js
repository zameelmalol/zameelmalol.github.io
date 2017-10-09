(function () {
  var openComment, styles, time, writeStyleChar, writeStyles;
  styles = "/* \n * Hi, it's me Zameel Zubair :) \n * Welcome to my Magic Show! \n * \n * \n * Firstly, thanks to Jake Albaugh \n * (https://codepen.io/jakealbaugh/pen/PwLXXP) \n * and Peter Lyons \n * (https://gist.github.com/focusaurus/bd03c01918f52566aa8b) \n * for giving me this code! \n * \n * \n * Now brace yourselves... \n * \n * You're about to watch me create my Business Card! \n * \n * \n */ \n \npre { \n transition: left 500ms; \n overflow: auto; \n background-color: #313744; \n color: #a6c3d4; \n border: 1px solid rgba(0,0,0,0.2); \n padding: 24px 12px; \n box-sizing: border-box; \n border-radius: 3px; \n box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1); \n text-align: left; \n font-size: 14px!important; \n height: 90vh; \n font-family: monospace!important; \n} \nbody, \n div, \n h1, \n h2, \n h3, \n a, \n img { \n margin: 0; \n padding: 0; \n border: 0; \n font-size: 100%; \n font: inherit; \n vertical-align: baseline; \n} \n \n/* HTML5 display-role reset for older browsers */ \n \nbody { \n line-height: 1; \n font-family: 'Roboto', sans-serif; \n background-color: #f5f7f9; \n color: #7b8c9a; \n text-align: center; \n font-size: 24px; \n margin: 1em; \n} \n \n \n \n \n/* \n * Syntax highlighting \n * Colors based on Base16 Ocean Dark \n */ \n \npre em:not(.comment) { \n font-style: normal; \n} \n \n.comment { \n color: #707e84; \n} \n \n.selector { \n color: #c66c75; \n} \n \n.selector .key { \n color: #c66c75; \n} \n \n.key { \n color: #c7ccd4; \n} \n \n.value { \n color: #d5927b; \n} \n \n/* \n * Let's build my business card. */ \n \nh1 { \n font-family: 'Julius Sans One', sans-serif; \n color: #424044; \n letter-spacing: 0.3em; \n padding-bottom: 0.2em; \n margin-top: 48px; \n margin-bottom: 20px; \n border-bottom: 3px solid #424044; \n display: inline-block; \n font-size: 48px; \n} \n \nh2 { \n font-size: 38px; \n letter-spacing: 0.1em; \n margin-bottom: 0.8em; \n} \n \nimg { \n display: block; \n margin: auto; \n} \n \nh3 { \n font-size: 26px; \n margin-bottom: 0.4em; \n} \n \n.contact-info-left { \n float: left; \n margin-top: 48px; \n margin-left: 20px; \n} \n \n.contact-info-right { \n float: right; \n margin-top: 48px; \n margin-right: 20px; \n} \n \n.moo-business-card { \n border: 1px dashed black; \n overflow: auto; \n margin-bottom: 15px; \n position: relative; \n} ";

  openComment = false;

  writeStyleChar = function (which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n ]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function (message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout((function () {
        return writeStyles(message, index, interval);
      }), interval);
    }
  };

  $('.coding').append("<style id=\"style-tag\"></style>\n <pre id=\"style-text\"></pre>");
  
  time = window.innerWidth <= 578 ? 4 : 16;

  writeStyles(styles, 0, time);

}).call(this);