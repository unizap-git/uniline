'use strict';

var React = require('react');

function Brightness(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19.5,4.5l-1.2,1.2" stroke-miterlimit="2"/>   <path d="M5.5,18.4l-1,1" stroke-miterlimit="2"/>   <path d="M12,20.7v1.5" stroke-miterlimit="2"/>   <path d="M22,11.7h-2" stroke-miterlimit="2"/>   <path d="M18.8,18.2l1.2,1.2" stroke-miterlimit="2"/>   <path d="M2,12.2h2" stroke-miterlimit="2"/>   <path d="M5,4.5l1,1" stroke-miterlimit="2"/>   <path d="M12,1.7v2" stroke-miterlimit="2"/>   <path d="M12,5.7c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5,6.5-2.9,6.5-6.5-2.9-6.5-6.5-6.5ZM12,15.7c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5v7Z"/>' : '<path d="M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z"/><path d="M38.9603 9.00977L36.5 11.4842"/><path d="M11.0674 36.7451L9.02051 38.8037"/><path d="M24 41.3533L24 44.3533"/><path d="M43.9998 23.3535L39.9998 23.3535"/><path d="M37.5324 36.3361L39.9998 38.8035"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535"/><path d="M4.00019 24.3535L8.00019 24.3535"/><path d="M10.0444 9.00974L12.0972 11.0625"/><path d="M24 3.35371L24 7.35371"/>';

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

module.exports = Brightness;
