'use strict';

var React = require('react');

function IncomeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.5,19l-2.5-2.5,2.5-2.5"/>   <path d="M21.5,19l-2.5-2.5,2.5-2.5"/>   <path d="M21.5,11v-6.5c0-.6-.4-1-1-1H3.5c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h10.7"/>   <path d="M12.4,7.5h-6.2M12.4,10.6h-6.2M9.3,16.7l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M34.7,37.6l-4.9-4.9,4.9-4.9"/>   <path d="M42.4,37.6l-4.9-4.9,4.9-4.9"/>   <path d="M42.4,22.1v-12.6c0-1.1-.9-1.9-1.9-1.9H7.5c-1.1,0-1.9.9-1.9,1.9v29.1c0,1.1.9,1.9,1.9,1.9h20.8"/>   <path d="M25.1,15.3h-11.8M25.1,21.2h-11.8M19.2,32.7l-5.8-5.8h2.8c3.2,0,5.8-2.6,5.8-5.8s-2.6-5.8-5.8-5.8"/>';

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

module.exports = IncomeOne;
