import React,{Suspense,setState} from "react";
import "./twitter.css";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import { twitterDetails } from "../../portfolio";

const renderLoader = () => <Loading />;
const cantDisplayError = "<div class='centerContent'><h2>Can't load? Check privacy protection settings</h2></div>";

function timeOut(){
  setTimeout(function() {
    if (!(document.getElementById('twitter').innerHTML.includes('iframe'))){
      document.getElementById('twitter').innerHTML = cantDisplayError ;
    }
  },
  10000);
}
var widthScreen=window.screen.width;
export default function Twitter() {
		return (
<div></div>
  );
}