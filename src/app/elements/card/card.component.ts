import { Component, HostBinding, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'bw-card',
    templateUrl: './card.component.html'
})
export class CardComponent {

    @HostBinding('class.bw-card') theme = true;

    @Input() imageUrl: string;
    @Input() entryTitle: string;
    @Input() location: string;

    constructor(private router: Router) {}

    navigateByUrl(url: string) {
      this.router.navigateByUrl(url);
    }
}
