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
/*  //khanh D:\Freedom\hoaan\bitbucket\ghesukien-performance\public\static\assets\images\v4\game
*/
  [class^="iconmobile-"], [class*="iconmobile-"] {
    background-image: url(/static/assets/images/icon-hoaan/iconmobile@2x.png);
    background-repeat: no-repeat;
    line-height: 30px;
    vertical-align: middle;
    background-size: 285px 140px;
  }
  // khanh fix [class^="icontgdd-"], [class*="icontgdd-"], [class^="iconmobile-"], [class*="iconmobile-"] {
    [class^="icontgdd-"], [class*="icontgdd-"]{
    background-image: url(/static/assets/images/icon-hoaan/icondesktop@1x.png);
    background-repeat: no-repeat;
    display: inline-block;
    height: 30px;
    width: 30px;
    line-height: 30px;
    vertical-align: middle;
}

  [class^="home-"], [class*="home-"] {
    background-image: url(https://cdn.tgdd.vn/v2015/Content/mobile/images/V5/homemobileNew@2x.png?v=1);
    background-repeat: no-repeat;
    display: inline-block;
    line-height: 30px;
    vertical-align: middle;
    background-size: 530px 65px;
  }
  .icontgdd-mobile {
    background-position: -190px 0;
    width: 16px;
    height: 25px;
    display: block;
    margin: 2px auto 3px;
  }
  .icontgdd-tablet {
    background-position: -209px 0;
    display: block;
    margin: 0 auto 5px;
    width: 33px;
    height: 22px;
}
.icontgdd-laptop {
  background-position: -245px 0;
  display: block;
  margin: 0 auto 5px;
  width: 39px;
  height: 21px;
}
.icontgdd-phukien {
  background-position: -288px 0;
  display: block;
  margin: 0 auto 5px;
  width: 22px;
  height: 22px;
}
.icontgdd-watch {
  background-position: -362px -50px;
  display: block;
  margin: 0 auto 0;
  width: 16px;
  height: 27px;
}
.icontgdd-maydoitra {
  background-position: -315px 0;
  display: block;
  margin: 0 auto 4px;
  width: 34px;
  height: 26px;
}
.icontgdd-news {
  background-position: -375px 0;
  display: block;
  margin: 0 auto 2px;
  width: 29px;
  height: 24px;
}
.icontgdd-ask {
  background-position: -410px 0;
  display: block;
  margin: 0 auto 3px;
  width: 25px;
  height: 25px;
}
.icontgdd-bct {
  background-position: 0 -50px;
  width: 110px;
  height: 38px;
}
.icontgdd-hg {
  background-position: -384px -49px;
  width: 45px;
  height: 38px;
}
img {
  border: 0;
}

/* Absolute Center Spinner */
.loadingPage {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loadingPage:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));

  background: -webkit-radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));
}

/* :not(:required) hides these rules from IE9 and below */
.loadingPage:not(:required) {
  /* hide "loading..." text */ 
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loadingPage:not(:required):after {
  content: "";
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 150ms infinite linear;
  -moz-animation: spinner 150ms infinite linear;
  -ms-animation: spinner 150ms infinite linear;
  -o-animation: spinner 150ms infinite linear;
  animation: spinner 150ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,
    rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,
    rgba(255, 255, 255, 0.75) -1.5em 0 0 0, rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,
    rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0, rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,
    rgba(255, 255, 255, 0.75) 0 1.5em 0 0, rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,
    rgba(255, 255, 255, 0.75) -1.5em 0 0 0, rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,
    rgba(255, 255, 255, 0.75) 0 -1.5em 0 0, rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
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
