import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('checkLeng', { static: false })
  checkLeng!: ElementRef;
  mobileQuery: MediaQueryList;

  spinner: boolean = false;

  selectedTabCategory = 0;
  panelOpenState = false;
  isExpanded = false;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private translate: TranslateService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // LANGUAGE
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngOnInit(): void {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 1000);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  changeCategory(n: number) {
    this.selectedTabCategory = n;
  }

  switchLang() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
      if (this.checkLeng.nativeElement.checked) {
        this.translate.use('en');
      } else {
        this.translate.use('es');
      }
    }, 1000);
  }
}
