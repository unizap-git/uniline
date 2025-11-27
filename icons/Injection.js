'use strict';

var React = require('react');

function Injection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.1,11.1l-9.5,9.5-6.4-6.4L12.7,4.8l6.4,6.4Z"/>   <path d="M11,3l9.9,9.9" stroke-miterlimit="2"/>   <path d="M12.7,4.8L3.2,14.3l6.4,6.4,9.5-9.5-6.4-6.4ZM10.2,17.1c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2.1-2.1c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.1,2.1c.4.4.4,1,0,1.4Z" fill-rule="evenodd"/>   <path d="M3.2,20.7l3.2-3.2" stroke-miterlimit="2"/>   <path d="M15.9,7.9l1.8-1.8" stroke-miterlimit="2"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M38.1684 22.262L19.0766 41.3539L6.34863 28.626L25.4405 9.53409"/><path d="M38.1684 22.262L19.0766 41.3539L6.34863 28.626L25.4405 9.53409"/><path d="M21.9053 5.99854L41.7043 25.7975"/><path d="M14.834 28.626L19.0766 32.8686"/><path d="M6.34961 41.353L12.7128 34.9898"/><path d="M31.8047 15.8979L35.3394 12.3632"/>';

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

module.exports = Injection;
