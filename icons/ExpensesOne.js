'use strict';

var React = require('react');

function ExpensesOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M15,18l2.5-2.5-2.5-2.5"/>   <path d="M19,18l2.5-2.5-2.5-2.5"/>   <path d="M21.5,11v-6.5c0-.6-.4-1-1-1H3.5c-.6,0-1,.4-1,1v15c0,.6.4,1,1,1h10.7"/>   <path d="M12.1,7.5h-6.2M12.1,10.6h-6.2M9,16.7l-3.1-3.1h1.5c1.7,0,3.1-1.4,3.1-3.1s-1.4-3.1-3.1-3.1"/>' : '<path d="M30 36L35 31L30.0004 26"/><path d="M38 36L43 31L38.0004 26"/><path d="M43 22V9C43 7.89543 42.1046 7 41 7H7C5.89543 7 5 7.89543 5 9V39C5 40.1046 5.89543 41 7 41H28.4706"/><path d="M13 15L18 21L23 15"/><path d="M12 27H24"/><path d="M12 21H24"/><path d="M18 21V33"/>';

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
