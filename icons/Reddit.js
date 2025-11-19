'use strict';

var React = require('react');

function Reddit(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.008 16.521a3.84 3.84 0 0 0 2.47-.77v.04a.281.281 0 0 0 .005-.396.281.281 0 0 0-.395-.005 3.291 3.291 0 0 1-2.09.61 3.266 3.266 0 0 1-2.081-.63.27.27 0 0 0-.38.381 3.84 3.84 0 0 0 2.47.77Z"/>   <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4.845-1.407A1.463 1.463 0 0 1 18.67 12a1.46 1.46 0 0 1-.808 1.33c.01.146.01.293 0 .44 0 2.242-2.61 4.061-5.829 4.061s-5.83-1.821-5.83-4.061a3.25 3.25 0 0 1 0-.44 1.458 1.458 0 0 1-.457-2.327 1.458 1.458 0 0 1 2.063-.064 7.163 7.163 0 0 1 3.9-1.23l.738-3.47v-.006a.31.31 0 0 1 .37-.236l2.452.49a1 1 0 1 1-.132.611l-2.14-.45-.649 3.12a7.11 7.11 0 0 1 3.85 1.23c.259-.246.6-.393.957-.405Z" clip-rule="evenodd"/>   <path d="M15.305 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4.625 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>' : '<path d="M21,15.5c0,3.6-4,6.5-9,6.5h0c-5,0-9-2.9-9-6.5.1-3.6,4.2-6.4,9.2-6.3,4.8,0,8.7,2.9,8.8,6.3Z"/>   <path d="M15.5,16.8c-1,.8-2.2,1.2-3.5,1.2-1.3,0-2.5-.4-3.5-1.2"/>   <path d="M21,4c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z"/>   <path d="M18,10.1c.4-.7,1.1-1.1,1.9-1.1,1.2,0,2.1.9,2.1,2.1s-.5,1.5-1.2,1.9"/>   <path d="M6,10.1c-.4-.7-1.1-1.1-1.9-1.1-1.2,0-2.1.9-2.1,2.1h0c0,.8.5,1.5,1.2,1.9"/>   <path d="M12,9v-3c0-1.1.9-2,2-2h3"/>   <path d="M9,13h0"/>   <path d="M15,13h0"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Reddit;
