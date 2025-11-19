'use strict';

var React = require('react');

function Egg(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M9.0276 4.36983C9.84851 3.59377 10.8715 3 12.05 3c1.1786 0 2.2016.59377 3.0225 1.36983.8255.78038 1.5331 1.82292 2.1072 2.92578C18.3188 9.48385 19.05 12.1425 19.05 14c0 3.866-3.134 7-7 7-3.86594 0-6.99995-3.134-6.99995-7 0-1.8575.73123-4.51615 1.87035-6.70439.57411-1.10286 1.28173-2.1454 2.1072-2.92578Zm2.8023 5.91657c.3082-.45832.1865-1.07968-.2718-1.38786-.4583-.30818-1.0797-.18648-1.3879.27182-.37473.55732-.66096 1.25684-.85365 1.91184-.19234.6537-.31649 1.3484-.31649 1.9178 0 .5523.44772 1 1.00004 1 .5522 0 1-.4477 1-1 0-.3189.0769-.8156.2351-1.3533.1579-.5365.3717-1.0286.5947-1.3603Z" clip-rule="evenodd"/>' : '<path d="M10.0001 13c0-.8883.4022-2.3826 1-3.27163M18.05 14c0 3.3137-2.6862 6-6 6-3.31366 0-5.99995-2.6863-5.99995-6S8.73634 4 12.05 4c3.3138 0 6 6.6863 6 10Z"/>';

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

module.exports = Egg;
