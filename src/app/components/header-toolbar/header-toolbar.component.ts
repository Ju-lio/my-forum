import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrl: './header-toolbar.component.scss',
})
export class HeaderToolbarComponent {
  constructor(private router: Router) {}
  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
