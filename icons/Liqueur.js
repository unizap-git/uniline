'use strict';

var React = require('react');

function Liqueur(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<line x1="11.5" y1="16" x2="11.5" y2="21"/>   <line x1="8.5" y1="22" x2="14.5" y2="22" stroke-miterlimit="2"/>   <g>     <path d="M15,12.5h-7c-.2,0-.5,0-.6-.2l3.4,3.9c.2.2.5.3.8.3s.6-.1.8-.3l3.4-3.9c-.2.1-.4.2-.6.2Z"/>     <path d="M20.2,6.1c-.2-.4-.5-.6-.9-.6H3.7c-.4,0-.7.2-.9.6s-.1.8.2,1.1l4.2,4.9c-.1-.2-.2-.3-.2-.5,0-.6.4-1,1-1h7c.6,0,1,.4,1,1s0,.4-.2.5l4.2-4.9c.3-.3.3-.7.2-1.1Z"/>   </g>   <path d="M17.5,9h1.5c1.7,0,3-1.3,3-3s-1.3-3-3-3-3,1.3-3,3,0,.3,0,.5"/>   <path d="M9.8,14.5c-.3,0-.6-.1-.8-.3l-4.3-4.9c-.4-.4-.3-1,.1-1.4.4-.4,1-.3,1.4.1l4.3,4.9c.4.4.3,1-.1,1.4-.2.2-.4.2-.7.2Z"/>   <path d="M17.5,8.6l-4.4,5.1"/>' : '<path d="M22.9994 31L7.41097 13L38.5879 13L22.9994 31Z"/><line x1="23" y1="32" x2="23" y2="42"/><line x1="17" y1="44" x2="29" y2="44"/><line x1="16" y1="23" x2="30" y2="23"/><path d="M35 18H38C41.3137 18 44 15.3137 44 12C44 8.68629 41.3137 6 38 6C34.6863 6 32 8.68629 32 12C32 12.3407 32.0284 12.6748 32.083 13"/><path d="M10.9993 17.1436L19.5352 27"/><path d="M35 17.1435L26.2105 27.2927"/>';

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

module.exports = Liqueur;
