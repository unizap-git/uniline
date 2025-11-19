'use strict';

var React = require('react');

function Shapes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.8638 3.49613C12.6846 3.18891 12.3557 3 12 3s-.6846.18891-.8638.49613l-3.49998 6c-.18042.30929-.1817.69147-.00336 1.00197S8.14193 11 8.5 11h7c.3581 0 .6888-.1914.8671-.5019.1784-.3105.1771-.69268-.0033-1.00197l-3.5-6ZM4 13c-.55228 0-1 .4477-1 1v6c0 .5523.44772 1 1 1h6c.5523 0 1-.4477 1-1v-6c0-.5523-.4477-1-1-1H4Zm12.5-1c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5 4.5-2.0147 4.5-4.5-2.0147-4.5-4.5-4.5Z"/>' : '<path d="M4.07141 14v6h5.99999v-6H4.07141Zm4.5-4h6.99999l-3.5-6-3.49999 6Zm7.99999 10c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5Z"/>';

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

module.exports = Shapes;
