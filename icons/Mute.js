'use strict';

var React = require('react');

function Mute(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM15.5,17c0,.6-.4,1-1,1-1.9,0-3.3-1.7-3.9-2.5h-1.5c-.9,0-1.5-.7-1.5-1.6v-3.8c0-.9.7-1.6,1.5-1.6h1.6c.6-.9,2-2.5,3.9-2.5s1,.4,1,1v10Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M29 14V34C25.15 34 22.2892 28.9106 22.2892 28.9106H18.1C17.4925 28.9106 17 28.4132 17 27.7995V20.1171C17 19.5034 17.4925 19.006 18.1 19.006H22.2892C22.2892 19.006 25.15 14 29 14Z"/>';

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

module.exports = Mute;
