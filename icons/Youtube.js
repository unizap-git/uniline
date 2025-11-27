'use strict';

var React = require('react');

function Youtube(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.3,7.9c-.2-2-1.8-3.6-3.8-3.7-2.8-.1-5-.2-6.5-.2s-3.7,0-6.5.2h0c-2,0-3.6,1.7-3.8,3.7-.1,1.6-.2,2.9-.2,4.1s0,2.6.2,4.2c.2,2,1.7,3.5,3.7,3.7,2.4.2,4.6.2,6.6.2s4.2,0,6.6-.2c2-.1,3.6-1.7,3.7-3.7.1-1.6.2-3,.2-4.1s0-2.6-.2-4.1ZM15.6,12.3c0,.4-.3.7-.6.9l-3.3,2.2c-.2.2-.5.2-.8.2-.8,0-1.4-.6-1.4-1.4v-4.4c0-.3,0-.6.2-.8.4-.7,1.3-.8,2-.4l3.3,2.2c.2.1.3.2.4.4.2.3.3.7.2,1.1Z"/>' : '<path d="M11.0637 10.4144C16.6069 10.1381 20.9183 10 23.998 10C27.0781 10 31.3911 10.1382 36.937 10.4145V10.4145C39.9391 10.5641 42.3672 12.9119 42.6176 15.9072C42.8712 18.9412 42.998 21.6134 42.998 23.9238C42.998 26.2626 42.8681 28.972 42.6082 32.0522H42.6082C42.3586 35.0103 39.9833 37.3412 37.021 37.5349C32.2796 37.845 27.9386 38 23.998 38C20.058 38 15.7186 37.845 10.9798 37.5351V37.5351C8.01852 37.3414 5.6437 35.0119 5.39288 32.055C5.12966 28.9518 4.99805 26.2414 4.99805 23.9238C4.99805 21.6341 5.12651 18.961 5.38345 15.9044L5.38346 15.9044C5.63514 12.9103 8.06274 10.564 11.0637 10.4144Z"/><path d="M21 19.6092V28.406C21 28.8794 21.3838 29.2631 21.8571 29.2631C22.0252 29.2631 22.1896 29.2137 22.3298 29.1211L28.9274 24.7605C29.3223 24.4995 29.4308 23.9677 29.1698 23.5728C29.1074 23.4784 29.0269 23.3973 28.933 23.3341L22.3354 18.8979C21.9426 18.6337 21.41 18.7381 21.1458 19.1309C21.0508 19.2723 21 19.4388 21 19.6092Z"/>';

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

module.exports = Youtube;
