import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  repositories: any[] = [];
  webRepositories: any[] = [
    {
      title: 'Peluquería Lilian',
      description: 'HTML5 | CSS3',
      imgPath: '../../../assets/portfolio/img/lilian-web.png',
      webLink: 'https://lilian.ar/',
      repoLink: 'https://github.com/EmmaVZ89/Peluqueria-Lilian-Proyecto',
    },
    {
      title: 'Peluquería Lilian Clientes',
      description: 'HTML5 | CSS3 | JavaScript | MySql | Node.js',
      imgPath: '../../../assets/portfolio/img/lilian-gestor.png',
      webLink: 'https://lilian-clientes.onrender.com/',
      repoLink: 'https://github.com/EmmaVZ89/Peluqueria-Lilian-Gestor',
    },
    {
      title: 'Sala de Juegos',
      description: ' Angular | TypeScript | Firebase',
      imgPath: '../../../assets/portfolio/img/sj.png',
      webLink: 'https://fir-userauth-fe03f.web.app/',
      repoLink: 'https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV',
    },
    {
      title: 'Clínica Online',
      description: 'Angular | TypeScript | Firebase | Chartjs',
      imgPath: '../../../assets/portfolio/img/co.png',
      webLink: 'https://clinica-online-tp2-labo-iv.firebaseapp.com/',
      repoLink: 'https://github.com/EmmaVZ89/Clinica-Online-TP2-Laboratorio-IV',
    },
    {
      title: 'Rick And Morty API',
      description: 'PHP | TypeScript | CSS3 | MySql',
      imgPath: '../../../assets/portfolio/img/ram.png',
      webLink: 'https://rickandmortycardgame.000webhostapp.com/index.php',
      repoLink: 'https://github.com/EmmaVZ89/Rick-and-Morty-Card-Game',
    },
    {
      title: 'Easy To Git',
      description: 'JavaScript | HTML5 | CSS3',
      imgPath: '../../../assets/portfolio/img/etg.png',
      webLink: 'http://easytogit.com/',
      repoLink: 'https://github.com/EmmaVZ89/easy-to-git',
    },
    {
      title: 'Documentación Técnica',
      description: 'HTML5 y CSS3',
      imgPath: '../../../assets/portfolio/img/td.png',
      webLink: 'https://emmavz89.github.io/Technical-Documentation/',
      repoLink: 'https://github.com/EmmaVZ89/Technical-Documentation',
    },
    {
      title: 'Landing Page',
      description: 'HTML5 y CSS3',
      imgPath: '../../../assets/portfolio/img/lp.png',
      webLink: 'https://emmavz89.github.io/Landing-Page/',
      repoLink: 'https://github.com/EmmaVZ89/Landing-Page',
    },
  ];
  mobileRepositories: any[] = [
    {
      title: 'Relevamiento Visual',
      description: 'Ionic Framework | Angular | Firebase | Chartjs',
      imgPath: '../../../assets/portfolio/img/rv.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Relevamiento-Visual-PPS',
    },
    {
      title: 'Tabla Didáctica de Idiomas',
      description: 'Ionic Framework | Angular | Firebase',
      imgPath: '../../../assets/portfolio/img/tdi.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Tabla-Didactica-PPS',
    },
    {
      title: 'Alarma de Robo',
      description: 'Ionic Framework | Angular | Firebase',
      imgPath: '../../../assets/portfolio/img/ar.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Alarma-de-Robo-PPS',
    },
    {
      title: 'Carga de Crédito',
      description: 'Ionic Framework | Angular | Firebase',
      imgPath: '../../../assets/portfolio/img/cc.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Carga-de-Credito-PPS',
    },
    {
      title: 'Conversando en el Aula',
      description: 'Ionic Framework | Angular | Firebase',
      imgPath: '../../../assets/portfolio/img/ca.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Conversando-en-el-Aula-PPS',
    },
    {
      title: 'Administración de Usuarios',
      description: 'Ionic Framework | Angular | Firebase',
      imgPath: '../../../assets/portfolio/img/au.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Administracion-de-Usuarios-PPS',
    },
    {
      title: 'Despertador por GPS',
      description: 'Ionic Framework | Angular | Firebase',
      imgPath: '../../../assets/portfolio/img/dgps.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Despertador-por-GPS-PPS',
    },
    {
      title: 'Visualizador Kinético',
      description: 'Ionic Framework | Angular | Firebase | Chartjs',
      imgPath: '../../../assets/portfolio/img/vk.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Visualizador-Kinetico-PPS',
    },
    {
      title: 'Juego Kinético',
      description: 'Ionic Framework | Angular | Firebase',
      imgPath: '../../../assets/portfolio/img/jk.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Juego-de-Movimiento-Kinetico-PPS',
    },
    {
      title: 'Control de Gastos',
      description: 'Ionic Framework | Angular | Firebase | Chartjs',
      imgPath: '../../../assets/portfolio/img/cg.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Control-de-Gastos-PPS',
    },
  ];
  desktopRespositories: any[] = [
    {
      title: 'Punto de Venta',
      description: 'NET Framework | C# | WPF',
      imgPath: '../../../assets/portfolio/img/pos.png',
      webLink: '',
      repoLink: 'https://github.com/EmmaVZ89/Punto-de-Venta-.NET',
    },
  ];
  spinner: boolean = false;
  repoQuantity: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.spinner = true;
    this.spinner = false;
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
    // this.spinner = false;
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
