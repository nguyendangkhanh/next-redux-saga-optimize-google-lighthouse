import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import * as fonts from '../constants/fonts';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    margin: 0; padding: 0;
  }
  
  .container-fluid{
    padding-right: 0px;
    padding-left: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    backgroundColor: '#fff3ba'

  }
  body {
    font-family: ${fonts.serifFont};
    width:calc(100% - 1px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  a {
    text-decoration: none;
  }
  .row {
    margin-right: 0;
  }

  .noPadding {
    padding-left: 0;
    padding-right: 0;
  }
  body, input, button, option, textarea, label, select, legend, h1, h2, h3, h4, h5, h6, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
    font: 14px/18px Arial,Helvetica,sans-serif;
    color: #333;
    outline: none;
  }
  .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  
  .iconmobile-menu {
    background-position: -100px 0;
    width: 33px;
    height: 33px;
    display: block;
    margin: 2px auto;
  }
  .iconmobile-mobile {
    background-position: 0 -40px;
    width: 15px;
    height: 24px;
    display: block;
    margin: 6px auto 4px;
  }
  .iconmobile-tablet{
    background-position: -19px -39px;
    width: 32px;
    height: 22px;
    display: block;
    margin: 7px auto 4px;
  }
  .iconmobile-laptop{
    background-position: -55px -40px;
    width: 39px;
    height: 21px;
    display: block;
    margin: 6px auto;
  }
  .iconmobile-access {
    background-position: -100px -40px;
    width: 35px;
    height: 19px;
    display: block;
    margin: 7px auto;
  }
  .iconmobile-fb {
    background-position: -140px -95px;
    width: 14px;
    height: 14px;
    position: relative;
    top: -2px;
    margin-right: 5px;
  }
  [class^="iconcom-"], [class*="iconcom-"] {
    background-image: url(//s.tgdd.vn/comment/Content/images/commentmobile@2x.png);
    background-size: 270px 128px;
    background-repeat: no-repeat;
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    vertical-align: middle;
}
/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

`;
module.exports={
  GlobalStyles
}
