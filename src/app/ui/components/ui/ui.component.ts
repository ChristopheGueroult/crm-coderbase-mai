import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  /**
   * open a true pour ouvrir le menu par defaut
   */
  public open = true;
  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    this.open = !this.open;
  }
}
