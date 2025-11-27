'use strict';

var React = require('react');

function Teeth(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.2,1.5h-.4c-1.3.2-2.1.7-2.8,1-.7.4-1.2.6-2,.6s-1.3-.3-2-.6c-.7-.4-1.6-.8-2.8-1h-.6c0,0-.2,0-.3,0-1.5,0-2.9.7-3.9,1.8-1,1.1-1.5,2.5-1.4,4,0,1.2.7,2.3,1.2,3.4.3.6.7,1.3.8,1.8.5,1.7.8,2.7.9,4.3.3,2.4.9,5.7,3.5,5.7s2.3-1.9,3.6-4.9c.3-.6.6-1.4.9-2,.2.5.5,1.2.7,1.7,1.1,2.7,2.1,5.2,3.8,5.2s3.2-.4,3.6-5.7c0-1.3.4-2.6.9-4.2.2-.5.5-1.2.9-1.8.6-1,1.2-2.1,1.2-3.2v-.3c0-3.2-2.6-5.8-5.8-5.8ZM16.3,7.9c.5.2.8.7.6,1.3-.1.4-.5.7-1,.7s-.2,0-.3,0l-3.8-1.2-3.8,1.2c-.1,0-.2,0-.3,0-.4,0-.8-.3-1-.7-.2-.5.1-1.1.6-1.3l1.2-.4-1.2-.4c-.5-.2-.8-.7-.6-1.3.2-.5.7-.8,1.3-.6l3.8,1.2,3.8-1.2c.5-.2,1.1.1,1.3.6.2.5-.1,1.1-.6,1.3l-1.2.4,1.2.4Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1172 5H14.0026C18.6687 5.68989 19.9341 8.33825 24.0003 8.33825C28.0664 8.33825 29.3314 5.69005 33.9978 5H34.5003C39.747 5 44.0003 9.25329 44.0003 14.5V15.1259C44.0003 18.0287 40.9091 21.3433 40.0003 24.4829C39.035 27.8174 38.3737 30.5425 38.1796 33.3943C37.7248 40.0751 35.447 43 33.0003 43C29.3465 43 26.1017 28.0251 24.0627 28.0251C22.0237 28.0251 17.9776 43 15.0003 43C13.1832 43 10.8293 41.9254 9.94554 33.3943C9.59391 30 9.00122 27.9407 8.00028 24.4829C7.1205 21.4437 4.15199 17.8111 4.00028 14.5511C3.76597 9.51593 7.65782 5.24419 12.693 5.00988C12.8343 5.00331 12.9757 5.00002 13.1172 5Z"/><path d="M15.4824 12.4634L32.0005 17.7887"/><path d="M15.4824 17.7886L32.0005 12.4632"/>';

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

module.exports = Teeth;
