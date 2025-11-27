'use strict';

var React = require('react');

function CosmeticBrush(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.2,2.3c-1.3-1.3-2.8-.7-3.5,0L7.4,12.2c-.2.2-.3.4-.3.7s0,.5.3.7l3.5,3.5c.2.2.4.3.7.3s0,0,0,0c.3,0,.5-.1.7-.3l9.9-11.3c.7-.7,1.3-2.2,0-3.5ZM14.8,14c-.2.2-.5.3-.7.3s-.5,0-.7-.3l-2.8-2.8c-.4-.4-.4-1,0-1.4s1-.4,1.4,0l2.8,2.8c.4.4.4,1,0,1.4Z"/>   <path d="M2.7,15.4l5.3-2.5,3.5,3.5-2.5,5.3s-2.5.4-4.6-1.8c-2.1-2.1-1.8-4.6-1.8-4.6Z"/>   <path d="M3.5,18.2l2.5-1.1"/>   <path d="M6.3,21l.7-1.4"/>   <path d="M9.5,11.7l1.4-1.2,1.4-1.2"/>   <path d="M15.3,12.2l-1.2,1.4-1.2,1.4"/>' : '<g clip-path="url(#icon-485bcb14184981dc)"><path d="M16.0991 25.8287L38.7265 6.02967C38.7265 6.02967 40.8478 3.90835 42.9691 6.02967C45.0904 8.15099 42.9691 10.2723 42.9691 10.2723L23.1701 32.8997L16.0991 25.8287Z"/><path d="M22.4639 20.8789L28.1207 26.5358"/><path d="M5.49331 30.7782L16.0999 25.8284L23.171 32.8995L18.2212 43.5061C18.2212 43.5061 13.2715 44.2132 9.02884 39.9706C4.7862 35.7279 5.49331 30.7782 5.49331 30.7782Z"/><path d="M6.90783 36.4349L11.8576 34.3136"/><path d="M12.5653 42.0921L13.9795 39.2637"/><path d="M18.9291 23.3536L21.7575 20.8787L24.586 18.4038"/><path d="M30.5957 24.4141L28.1208 27.2425L25.646 30.0709"/></g><defs><clipPath id="icon-485bcb14184981dc"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = CosmeticBrush;
