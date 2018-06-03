import { Component, HostBinding } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'bw-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @HostBinding('class.bw-header') theme = true;

  searchCtrl: FormControl = new FormControl();

  constructor(private router: Router) {}

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
