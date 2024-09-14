import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() likes?: number;
  @Input() username?: string;
  @Input() tempoLeitura?: number;
  @Input() data?: string;
  @Input() titulo?: string;
  @Input() texto?: string;

  getDiasAtras(data: string) {
    return data;
  }
}
