import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.page.html',
  styleUrls: ['./menu-list.page.scss'],
})
export class MenuListPage implements OnInit {
  level: number = 0;
  nextPage = MenuListPage;

  constructor(private nav: IonNav) { }

  ngOnInit() {
  }

  goToNextLevel() {
    this.nav.push(this.nextPage, { level: this.level + 1 });
  }

  goToRoot() {
    this.nav.push(this.nextPage, { level: 0 });
  }

}
