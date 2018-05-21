import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flipped:boolean = false;
  constructor(){
  }
  flipCard(){
    if(!this.flipped)
    {
    $('.flipWrapper').click(function () {
              $(this).find('.cards').toggleClass('flipped'); 
              return false;
          });
          this.flipped = true;
    }

  }
}
