import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = false;

  groups = [
    {
      row: [
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' }
      ]
    },
    {
      row: [
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' }
      ]
    },
    {
      row: [
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' }
      ]
    },
    {
      row: [
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' }]
    },
    {
      row: [
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' }]
    },
    {
      row: [
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' },
        { isChecked: true, src: '' }]
    }];

  down(b) {
    this.active = true;
    if (this.active) {
      b.isChecked = !b.isChecked;
    }
  }

  over(b) {
    if (this.active) {
      b.isChecked = !b.isChecked;
    }
  }

  up() {
    this.active = false;
  }
}
