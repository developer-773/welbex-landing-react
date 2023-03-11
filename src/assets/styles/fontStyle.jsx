import { createGlobalStyle } from "styled-components";
import InterRegularWoff from "../fonts/inter-v12-latin-regular.woff";
import InterRegularWoff2 from "../fonts/inter-v12-latin-regular.woff2";
import InterMediumWoff from "../fonts/inter-v12-latin-500.woff"
import InterMediumWoff2 from "../fonts/inter-v12-latin-500.woff2"
import InterBoldWoff from "../fonts/inter-v12-latin-700.woff"
import InterBoldWoff2 from "../fonts/inter-v12-latin-700.woff2"
import InterBlackWoff from "../fonts/inter-v12-latin-900.woff"
import InterBlackWoff2 from "../fonts/inter-v12-latin-900.woff2"
import MontserratLightWoff from "../fonts/montserrat-v25-latin-300.woff";
import MontserratLightWoff2 from "../fonts/montserrat-v25-latin-300.woff2";
import MontserratRegularWoff from "../fonts/montserrat-v25-latin-regular.woff";
import MontserratRegularWoff2 from "../fonts/montserrat-v25-latin-regular.woff2";




export const FontStyles = createGlobalStyle`
   
@font-face {
  font-family: 'Inter';
  font-weight: 400;
  src: url(${InterRegularWoff2}) format('truetype'), 
       url(${InterRegularWoff}) format('truetype'); 
}


/* inter-500 - latin */
@font-face {
  font-family: 'Inter';
  font-weight: 500;
  src: url(${InterMediumWoff2}) format('woff2'), 
       url(${InterMediumWoff}) format('woff'); 
}

/* inter-700 - latin */
@font-face {
  font-family: 'Inter';
  font-weight: 700;
  src: url(${InterBoldWoff2}) format('woff2'), 
       url(${InterBoldWoff}) format('woff'); 
}

/* inter-900 - latin */
@font-face {
  font-family: 'Inter';
  font-weight: 900;
  src: url(${InterBlackWoff2}) format('woff2'), 
       url(${InterBlackWoff}) format('woff'); 
}

/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-weight: 300;
  src: url(${MontserratLightWoff2}) format('woff2'), 
       url(${MontserratLightWoff}) format('woff'); 
}
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-weight: 400;
  src: url(${MontserratRegularWoff2}) format('woff2'),
       url(${MontserratRegularWoff}) format('woff'); 
}

`