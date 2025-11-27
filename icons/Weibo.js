'use strict';

var React = require('react');

function Weibo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.7,8.3c-.1-1.6-.8-3-1.8-4-1-1-2.4-1.7-3.9-1.9" stroke-miterlimit="2"/>   <path d="M18.6,8.5c0-.8-.4-1.6-1-2.1-.6-.5-1.3-.9-2.1-1" stroke-miterlimit="2"/>   <path d="M19.5,12.4c-.6-.6-1.4-.6-2.1-.6-.2,0-.6,0-.8,0,0-.2,0-.6.1-.8.2-.9.5-2.5-.9-3.3-1.1-.6-2.4,0-3.4.6-.2.1-.5.3-.7.4,0-.1,0-.2.1-.3.3-.7.8-2.2-.5-3-1.5-.8-3.5,0-5.8,2.1C3.4,9.6,0,14.7,2.9,18.6c1,1.3,2.6,2.1,4.6,2.4.5,0,1,0,1.4,0,3,0,6.3-1,8.3-2.6,1.9-1.5,2.8-2.8,2.9-4.1,0-.7-.2-1.4-.7-1.9ZM9.5,17c-1.7,0-3-.9-3-2s1.3-2,3-2,3,.9,3,2-1.3,2-3,2Z"/>' : '<path d="M12.5618 16.4109C9.21763 19.6608 2.16324 29.146 7.36253 35.9317C12.5618 42.7174 27.2821 40.0998 33.359 35.3193C39.4358 30.5388 38.836 27.5848 37.5184 26.2833C36.2009 24.9818 32.3556 26.297 31.2793 24.526C30.203 22.7551 33.1957 18.3311 30.6452 16.9312C28.0948 15.5313 23.6907 20.5811 21.7015 19.269C19.7122 17.9568 23.8906 13.6729 21.7015 12.4384C19.5123 11.204 15.906 13.161 12.5618 16.4109Z"/><path d="M43.3787 16.5159C43.1435 13.3848 41.799 10.5632 39.7372 8.44277C37.7247 6.37311 35.0287 4.9715 32.0137 4.60229"/><path d="M37.2919 16.9313C37.1627 15.2916 36.4247 13.8139 35.2928 12.7034C34.188 11.6195 32.7079 10.8855 31.0527 10.6921"/><path d="M25 30C25 32.2091 22.3137 34 19 34C15.6863 34 13 32.2091 13 30C13 27.7909 15.6863 26 19 26C22.3137 26 25 27.7909 25 30Z"/>';

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

module.exports = Weibo;
