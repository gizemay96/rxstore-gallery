import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() change = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Input() selectedImg;
  @Input() progress;
  @Input() gallery: string[];
  constructor() {}

  ngOnInit(): void {}

  logPan(i){
    console.log(i)
  }
}
