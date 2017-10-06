import { Component } from '@angular/core';
import { Video } from '../videos/videos';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);


export class VideoComponent {
    
    private video: Video;

}