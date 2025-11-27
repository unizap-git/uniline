'use strict';

var React = require('react');

function RedEnvelope(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,2H4.5v3l7.5,2,7.5-2v-3Z"/>   <path d="M19.5,8.5v13.5H4.5v-13.5"/>   <path d="M15.3,10.3h-5.9M15.3,13.2h-5.9M12.3,19.1l-3-3h1.5c1.6,0,3-1.3,3-3s-1.3-3-3-3"/>' : '<path d="M37.5,6H10.5v5.4l13.5,3.6,13.5-3.6v-5.4Z"/>   <path d="M37.5,17.7v24.3H10.5v-24.3"/>   <path d="M29.6,22h-9.9M29.6,27h-9.9M24.6,36.7l-4.9-4.9h2.4c2.7,0,4.9-2.2,4.9-4.9s-2.2-4.9-4.9-4.9"/>';

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

module.exports = RedEnvelope;
