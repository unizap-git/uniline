'use strict';

var React = require('react');

function Mascara(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="14" y="8" width="6" height="14"/>   <path d="M7,2v12"/>   <g>     <path d="M10,19h-6c-.6,0-1-.4-1-1v4.2c0,.6.4,1,1,1h6c.6,0,1-.4,1-1v-4.2c0,.6-.4,1-1,1Z"/>     <path d="M10,13.2h-6c-.6,0-1,.4-1,1v3.8c0-.6.4-1,1-1h6c.6,0,1,.4,1,1v-3.8c0-.6-.4-1-1-1Z"/>   </g>   <path d="M10,21c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M4,21c-.6,0-1-.4-1-1v-4c0-.6.4-1,1-1s1,.4,1,1v4c0,.6-.4,1-1,1Z"/>   <path d="M9,4.5h-4"/>   <path d="M10,7.5h-6"/>   <path d="M9,10.5h-4"/>' : '<rect x="28" y="16" width="12" height="28"/><rect x="8" y="28" width="12" height="16"/><path d="M14 4V28"/><path d="M20 36H8"/><path d="M20 32V40"/><path d="M8 32V40"/><path d="M18 9H10"/><path d="M20 15L8 15"/><path d="M18 21H10"/>';

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

module.exports = Mascara;
