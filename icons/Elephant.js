'use strict';

var React = require('react');

function Elephant(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.9,14.1c0-.4-.3-.7-.7-.8-.4-.1-.8,0-1,.3-.2.3-.7.5-1,.5v-6.3c0,0,0-.1,0-.2-.3-1.7-1.8-4.8-5.6-4.6h-3.4s0,0,0,0v2h0c-.4,0-1,.3-1.5.9-.4.4-.9,1.3-.7,2.6.1.8.6,1.7,2,1.9.4,0,1.4,0,2.1-1.6l1.8.8c-1.1,2.5-2.9,2.8-3.8,2.8-.1,0-.2,0-.3,0-2-.2-3.4-1.5-3.8-3.5-.3-1.4,0-2.8.9-3.9-1.5-.2-3.5.2-4.9,1.3-.9.7-2,2.2-2,4.7v9.1c0,.6.4,1,1,1h2.9c.6,0,1-.4,1-1v-2.1h6.4v2.1c0,.6.4,1,1,1h2.9c.6,0,1-.4,1-1v-2.5c.2.2.4.3.6.5.7.4,1.6.8,2.6.5,2-.5,2.8-2,2.4-4.5ZM16.5,10.5c-.6,0-1-.4-1-1s.4-1,1-1,1,.4,1,1-.4,1-1,1Z"/>' : '<path d="M16.7942 12C12.7417 11.1116 4 12.1925 4 21.7874V40H9.86912V33.7811H26.638V40H32.5071V28.8949C33.2058 28.3026 34.4075 33.0231 36.6994 34.2253C38.0521 34.9349 39.2147 35.3968 40.4724 35.1137C43.1948 34.5009 44.4969 32.715 43.8261 28.4507C42.5685 29.9313 38.7955 31.5429 38.3763 28.4507C38.3763 24.8798 38.3763 15.5687 38.3763 15.5687C37.957 12.9035 35.5255 7.66183 29.1534 8.01719H22.2842C19.3497 8 14.9898 12.0148 15.9959 17.3452C16.3082 19 17.5 22.3045 21.7035 22.6757C23.3804 22.8238 26.1534 22.1427 27.8302 18.2336"/><circle cx="33" cy="19" r="2"/>';

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

module.exports = Elephant;
