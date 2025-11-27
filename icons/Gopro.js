'use strict';

var React = require('react');

function Gopro(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="2.5" y="3.5" width="6.5" height="17"/>   <path d="M20,5.5h-6.5c-1.4,0-2.5,1.1-2.5,2.5v8c0,1.4,1.1,2.5,2.5,2.5h6.5c1.4,0,2.5-1.1,2.5-2.5v-8c0-1.4-1.1-2.5-2.5-2.5ZM16.8,15c-1.5,0-2.8-1.2-2.8-2.8s1.2-2.8,2.8-2.8,2.8,1.2,2.8,2.8-1.2,2.8-2.8,2.8Z"/>   <path d="M9,12h3"/>   <path d="M5.8,7.5h0c.7,0,1.2.6,1.2,1.2h0c0,.7-.6,1.2-1.2,1.2h0c-.7,0-1.2-.6-1.2-1.2h0c0-.7.6-1.2,1.2-1.2Z"/>' : '<rect x="5" y="7" width="13" height="34"/><rect x="24" y="13" width="19" height="22" rx="3"/><circle cx="33.5" cy="24.5" r="3.5"/><path d="M18 24H24"/><rect x="9" y="15" width="5" height="5" rx="2.5"/>';

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

module.exports = Gopro;
