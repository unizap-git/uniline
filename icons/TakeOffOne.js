'use strict';

var React = require('react');

function TakeOffOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-75c3048d2fb27154)"><path d="M4.99707 40.9883L42.9971 40.9883"/><path d="M8.52068 31.2641L3.90765 23.2741C4.87794 22.7139 9.67924 24.3889 11.4666 25.3061L21.1686 21.8332L12.8733 7.46538L16.9879 7.21842L30.3885 19.6798L38.6389 17.0682C42.2926 16.023 43.4449 18.0188 43.675 18.4175C45.0577 20.8123 42.2639 22.4252 41.8648 22.6556C38.672 24.499 8.52068 31.2641 8.52068 31.2641Z"/></g><defs><clipPath id="icon-75c3048d2fb27154"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-36be7d32fb27154)"><path d="M4.99707 40.9883L42.9971 40.9883"/><path d="M8.52068 31.2641L3.90765 23.2741C4.87794 22.7139 9.67924 24.3889 11.4666 25.3061L21.1686 21.8332L12.8733 7.46538L16.9879 7.21842L30.3885 19.6798L38.6389 17.0682C42.2926 16.023 43.4449 18.0188 43.675 18.4175C45.0577 20.8123 42.2639 22.4252 41.8648 22.6556C38.672 24.499 8.52068 31.2641 8.52068 31.2641Z"/></g><defs><clipPath id="icon-36be7d32fb27154"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = TakeOffOne;
