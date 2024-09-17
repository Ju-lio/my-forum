import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./modules/perfil/perfil.module').then(m => m.PerfilModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then(m => m.InicioModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
