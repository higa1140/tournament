import { Component, Input } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { window } from '@angular/platform-browser/src/facade/browser';
import { ReplaySubject } from 'rxjs/ReplaySubject'

@Component({
  selector: 'youtube',
  styles: [`
  `],
  templateUrl: './youtube.component.html'

})
export class YoutubeComponent{
    private player;
    
    @Input()
    videoId:string;
    
    constructor(){}

  ngOnInit() {
    const doc = window.document;
    let playerApiScript = doc.createElement("script");
    (<any>window).onYouTubeIframeAPIReady = ()=>{this.loadComplete()}; 
    // playerApiScript.onload = this.loadComplete;
    playerApiScript.type = "text/javascript";
    playerApiScript.src = "http://www.youtube.com/iframe_api";
    doc.head.appendChild(playerApiScript);
  }

  loadComplete(){
    this.player = new (<any>window).YT.Player('video', {
        //   height: '360',
        //   width: '640',
          videoId: this.videoId,
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          }
        });
  }

  onPlayerReady(){}
  onPlayerStateChange(){}
}