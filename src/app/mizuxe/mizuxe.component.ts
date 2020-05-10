import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mizuxe',
  templateUrl: './mizuxe.component.html',
  styleUrls: ['./mizuxe.component.scss'],
})
export class MizuxeComponent implements OnInit {
  constructor() {}

  year = new Date().getFullYear();
  ngOnInit(): void {}

  scrollToElement(element): void {
    console.log(element);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
