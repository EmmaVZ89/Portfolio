import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  selectedTab = 0;

  ngOnInit(): void {
    setInterval(() => {
      if (this.selectedTab + 1 == 3) {
        this.selectedTab = 0;
      } else {
        this.selectedTab++;
      }
    }, 5000);
  }
}
