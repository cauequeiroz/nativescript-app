import { Component, OnInit } from '@angular/core';
import { Videos, Video } from './videos';

@Component({
    moduleId: module.id,
    selector: 'videos',
    templateUrl: './videos.component.html',
    providers: [ Videos ]
})
export class VideosComponent implements OnInit {

    private videos: Video[];

    constructor(private service: Videos) {}

    ngOnInit() {
        
        this.videos = this.service.getAllVideos();
    }   
}