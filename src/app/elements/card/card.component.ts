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
    @Input() postId: number;

    constructor(private router: Router) {}

    navigate() {
      this.router.navigateByUrl('blog-view/' + this.postId);
    }
}
