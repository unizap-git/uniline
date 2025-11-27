'use strict';

var React = require('react');

function Xigua(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1.8C6.4,1.8,1.8,6.4,1.8,12s1.1,2.7,2,3.2c.5.3,1,.4,1.6.6.7.2,1.5.3,2,.8.7.6.9,1.6,1,2.4,0,.3.1.5.2.7.4,1.2,1.7,2.5,3.4,2.5,5.6,0,10.2-4.6,10.2-10.2S17.6,1.8,12,1.8ZM16.4,13.5c-.6.6-1.3,1.2-2,1.6-.7.5-1.6.8-2.6,1.1,0,0-.1,0-.1,0-.2,0-.4,0-.5,0-1.2,0-2.2-.8-2.5-2-.2-.9-.3-1.8-.3-2.7s.2-1.9.5-2.7c.4-1.1,1.5-1.7,2.7-1.5.8.1,1.7.4,2.5.9.7.4,1.4,1,2.1,1.5,0,0,0,0,0,0,.5.5.8,1.1.8,1.8,0,.7-.2,1.3-.7,1.8Z"/>' : '<path d="M24.0003 42.3334C34.1255 42.3334 42.3337 34.1253 42.3337 24.0001C42.3337 13.8749 34.1255 5.66675 24.0003 5.66675C13.8751 5.66675 5.66699 13.8749 5.66699 24.0001C5.66699 26.4858 6.80727 27.6871 8.61419 28.7448C10.4211 29.8025 13.8204 29.6269 16.1327 31.7014C18.445 33.776 18.6011 37.1507 19.0799 38.7905C19.5588 40.4303 21.5146 42.3334 24.0003 42.3334Z"/><path d="M19.5264 18.5412C18.988 19.8493 18.7188 21.3866 18.7188 23.153C18.7188 24.8329 18.8971 26.496 19.2539 28.1424L19.2539 28.1424C19.6113 29.7916 21.2381 30.8389 22.8873 30.4815C22.9472 30.4685 23.0067 30.4537 23.0657 30.4372C24.8653 29.9322 26.4325 29.2711 27.7673 28.454C29.0152 27.6899 30.1779 26.7253 31.2556 25.56L31.2556 25.56C32.4013 24.3211 32.3258 22.3879 31.0868 21.2421C31.0514 21.2094 31.0152 21.1775 30.9783 21.1465C29.7116 20.0817 28.3858 19.1254 27.0008 18.2774C25.5547 17.3921 24.1384 16.8579 22.7519 16.6749L22.7518 16.6749C21.3779 16.4935 20.0539 17.2596 19.5264 18.5412Z"/>';

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

module.exports = Xigua;
