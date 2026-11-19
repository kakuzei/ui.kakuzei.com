import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  visibility = input<'hidden' | 'shown'>('hidden');
}
