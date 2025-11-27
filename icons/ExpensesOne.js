'use strict';

var React = require('react');

function ExpensesOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,18l2.5-2.5-2.5-2.5"/>   <path d="M19,18l2.5-2.5-2.5-2.5"/>   <path d="M21.5,11v-6.5c0-.6-.4-1-1-1H3.5c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h10.7"/>   <path d="M12.1,7.5h-6.2M12.1,10.6h-6.2M9,16.7l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M29.7,35.4l4.7-4.7-4.7-4.7"/>   <path d="M37.3,35.4l4.7-4.7-4.7-4.7"/>   <path d="M42,22.1v-12.3c0-1-.9-1.9-1.9-1.9H7.9c-1,0-1.9.9-1.9,1.9v28.5c0,1,.9,1.9,1.9,1.9h20.4"/>   <path d="M24.1,15.5h-11.5M24.1,21.2h-11.5M18.3,32.5l-5.7-5.7h2.8c3.1,0,5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7"/>';

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

module.exports = ExpensesOne;
