import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  repositories: any[] = [];
  spinner: boolean = false;
  repoQuantity:number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const date = new Date('2021-05-19T14:53:10Z');
    console.log(date);
    this.spinner = true;
    // this.http
    //   .get('https://api.github.com/users/EmmaVZ89/repos?per_page=100')
    //   .subscribe((repos: any) => {
    //     this.repositories = repos;
    //     this.repositories.sort(function (a: any, b: any) {
    //       return <any>new Date(b.pushed_at) - <any>new Date(a.pushed_at);
    //     });
    //     this.repoQuantity = this.repositories.length;
    //     // console.log(this.repositories);
    //   }); 
    // this.http
    //   .get(
    //     'https://api.github.com/repos/EmmaVZ89/Administracion-de-Usuarios-PPS/languages'
    //   )
    //   .subscribe((lang) => {
    //     console.log(lang);
    //   });
  }

  ngAfterViewInit(): void {
    this.spinner = false;
  }

  // INFO REPOS
  /*
    clone_url = link al repositorio
    description = descripción de repo 
    language = lenguaje mas usado
    languages_url = JSON con lenguajes
    name = nombre del proyecto
    topics = array con las etiquetas del proyecto (angular, firebase-auth, etc)
    created_at = fecha de creación del repositorio "2021-05-19T11:46:15Z"
    pushed_at = ultimo push "2021-05-19T14:53:10Z"
    updated_at = ultima actualización "2022-12-22T23:08:28Z"
  */
}
