import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker'
import { SpawnSyncOptionsWithBufferEncoding } from 'child_process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'pwa-spa';
  update:boolean=false;

  constructor(updates:SwUpdate){
    updates.available.subscribe(event=>{
      updates.activateUpdate().then(()=>{document.location.reload()})
    })
  }
}
