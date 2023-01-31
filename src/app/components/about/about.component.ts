import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  selectedTab = 0;
  user: any = null;

  constructor(private translate: TranslateService, private http: HttpClient) {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.selectedTab + 1 == 3) {
        this.selectedTab = 0;
      } else {
        this.selectedTab++;
      }
    }, 5000);
    this.http.get('https://api.github.com/users/EmmaVZ89').subscribe((user) => {
      this.user = user;
    });
  }

  downloadCV() {
    let url = '../../../assets/cv_es.pdf';
    let name = 'Emmanuel-Zelarayan-CV-Programador-FullStack.pdf';
    if (this.translate.currentLang == 'en') {
      url = '../../../assets/cv_en.pdf';
      name = 'Emmanuel-Zelarayan-CV-FullStack-Developer.pdf';
    }
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = name;
    link.click();
  }
}
