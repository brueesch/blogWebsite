import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'bw-card',
    templateUrl: './card.component.html'
})
export class CardComponent {

    @HostBinding('class.bw-card') theme = true;

    @Input() imageUrl: string;
    @Input() entryTitle: string;
    @Input() location: string;
}
