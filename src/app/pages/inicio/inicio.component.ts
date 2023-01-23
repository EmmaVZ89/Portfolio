import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit, OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;

  user: any;

  selectedTab = 0;
  panelOpenState = false;
  isExpanded = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private http: HttpClient
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    // this.http.get('https://api.github.com/users/EmmaVZ89').subscribe((user) => {
    //   console.log(user);
    //   this.user = user;
    // });

    // this.http
    //   .get('https://api.github.com/users/EmmaVZ89/repos?per_page=100')
    //   .subscribe((repos) => {
    //     // console.log(repos);
    //   });

    setInterval(() => {
      if (this.selectedTab + 1 == 3) {
        this.selectedTab = 0;
      } else {
        this.selectedTab++;
      }
    }, 5000);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;
}
