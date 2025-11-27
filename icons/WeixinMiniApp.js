'use strict';

var React = require('react');

function WeixinMiniApp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM17.7,10.8c-.3.6-.7,1.2-1.3,1.6-.6.4-1.2.6-1.9.6s-1-.4-1-1,.4-1,1-1,.6,0,.8-.3c.2-.2.4-.4.6-.7.1-.3.1-.6,0-.9,0-.3-.2-.6-.4-.8-.2-.2-.5-.4-.8-.4-.3,0-.6,0-.9,0-.3.1-.5.3-.7.6-.2.2-.3.5-.3.8v5c0,.7-.2,1.4-.6,1.9-.4.6-.9,1-1.6,1.3-.4.2-.9.3-1.3.3s-.5,0-.7,0c-.7-.1-1.3-.5-1.8-1s-.8-1.1-1-1.8c-.1-.7,0-1.4.2-2s.7-1.2,1.3-1.6c.6-.4,1.2-.6,1.9-.6s1,.4,1,1-.4,1-1,1-.6,0-.8.3c-.2.2-.4.4-.6.7-.1.3-.1.6,0,.9,0,.3.2.6.4.8.2.2.5.4.8.4.3,0,.6,0,.9,0,.3-.1.5-.3.7-.6.2-.2.3-.5.3-.8v-5c0-.7.2-1.4.6-1.9.4-.6.9-1,1.6-1.3.6-.3,1.3-.3,2-.2.7.1,1.3.5,1.8,1s.8,1.1,1,1.8,0,1.4-.2,2Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M29 24C29.9889 24 30.9556 23.7068 31.7779 23.1574C32.6001 22.6079 33.241 21.827 33.6194 20.9134C33.9978 19.9998 34.0969 18.9945 33.9039 18.0246C33.711 17.0546 33.2348 16.1637 32.5355 15.4645C31.8363 14.7652 30.9454 14.289 29.9755 14.0961C29.0055 13.9031 28.0002 14.0022 27.0866 14.3806C26.173 14.759 25.3921 15.3999 24.8427 16.2222C24.2932 17.0444 24 18.0111 24 19V29C24 29.9889 23.7068 30.9556 23.1574 31.7779C22.6079 32.6001 21.8271 33.241 20.9134 33.6194C19.9998 33.9978 18.9945 34.0969 18.0246 33.9039C17.0546 33.711 16.1637 33.2348 15.4645 32.5355C14.7652 31.8363 14.289 30.9454 14.0961 29.9755C13.9031 29.0055 14.0022 28.0002 14.3806 27.0866C14.759 26.173 15.3999 25.3921 16.2222 24.8427C17.0444 24.2932 18.0111 24 19 24"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = WeixinMiniApp;
