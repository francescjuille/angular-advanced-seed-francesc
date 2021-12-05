import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedLanguaje = "";
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.initMainLanguage();
  }

  initMainLanguage() {
    this.selectedLanguaje = this.translate.getDefaultLang();
  }

  updateLanguage(){
    const lang = this.selectedLanguaje;
    if (lang=="es" || lang=="en" || lang=="fr" || lang=="ca" || lang=="de") {
      this.translate.setDefaultLang(lang);
    }
  }

}
