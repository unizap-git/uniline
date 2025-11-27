'use strict';

var React = require('react');

function RelievedFace(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM5.9,9.8c-.2-.5.2-1,.6-1.2.5-.2,1.1,0,1.3.4,0,0,.3.4.6.4s.6-.5.6-.5c.3-.5.9-.7,1.3-.4.5.3.7.8.4,1.3-.3.6-1.1,1.6-2.4,1.6s-2.1-1-2.4-1.6h0ZM16.4,15.9c0,.1-1.3,2.6-4.4,2.6s-4.3-2.4-4.4-2.6c-.2-.5,0-1.1.4-1.3.5-.2,1.1,0,1.3.4,0,0,.8,1.4,2.6,1.4s2.6-1.4,2.6-1.5c.3-.5.9-.7,1.3-.4s.9.9.6,1.4h0ZM17.9,9.9c-.3.6-1.1,1.6-2.4,1.6s-2.1-1-2.4-1.6c-.2-.5,0-1.1.4-1.3s1.1,0,1.3.4c0,0,.3.4.6.4s.6-.5.6-.5c.3-.5.9-.7,1.3-.4.5.3.9.9.6,1.4h0Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"/><path d="M20 19C20 19 19 21 17 21C15 21 14 19 14 19"/><path d="M34 19C34 19 33 21 31 21C29 21 28 19 28 19"/>';

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

module.exports = RelievedFace;
