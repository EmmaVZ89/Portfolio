import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

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
    // });
    // this.http
    //   .get('https://api.github.com/users/EmmaVZ89/repos?per_page=100')
    //   .subscribe((repos) => {
    //     // console.log(repos);
    //   });

    setInterval(() => {
      if(this.selectedTab + 1 == 3){
        this.selectedTab = 0;
      } else {
        this.selectedTab++;
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;
}
