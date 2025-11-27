'use strict';

var React = require('react');

function Oceanengine(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.4826 8.47412L23.8804 16.6267H4.75781L7.21558 8.47412H21.4826Z"/><path d="M9.1335 18.1254L17.3461 20.1036L7.81473 36.6485L2 30.4741L9.1335 18.1254Z"/><path d="M11.292 33.6512L17.1067 27.4768L26.698 44.0218L18.4255 46L11.292 33.6512Z"/><path d="M40.0652 39.4659H25.7982L23.4004 31.3733H42.523"/><path d="M45.2806 17.466L38.1471 29.8747L29.9346 27.8965L39.4659 11.3515"/><path d="M35.989 14.3488L30.1743 20.5232L20.583 3.91825L28.8555 2L35.989 14.3488Z"/>' : '<path d="M21.4826 8.47412L23.8804 16.6267H4.75781L7.21558 8.47412H21.4826Z"/><path d="M9.1335 18.1254L17.3461 20.1036L7.81473 36.6485L2 30.4741L9.1335 18.1254Z"/><path d="M11.292 33.6512L17.1067 27.4768L26.698 44.0218L18.4255 46L11.292 33.6512Z"/><path d="M40.0652 39.4659H25.7982L23.4004 31.3733H42.523"/><path d="M45.2806 17.466L38.1471 29.8747L29.9346 27.8965L39.4659 11.3515"/><path d="M35.989 14.3488L30.1743 20.5232L20.583 3.91825L28.8555 2L35.989 14.3488Z"/>';

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

module.exports = Oceanengine;
