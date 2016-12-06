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
    if((<any>window).YT){
      this.setPlayer();
    } else {
      const doc = window.document;
      let playerApiScript: HTMLScriptElement = doc.createElement("script");
      window.onYouTubeIframeAPIReady = ()=>{
        this.setPlayer()};
      playerApiScript.type = "text/javascript";
      playerApiScript.src = "//www.youtube.com/iframe_api";
      doc.head.appendChild(playerApiScript);
    }
  }

  setPlayer(){
    this.player = new (<any>window).YT.Player('video', {
        //   height: '360',
           width: '100%',
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