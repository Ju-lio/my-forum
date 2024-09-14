import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: ':id',
    component: PostComponent,
  },
  {
    path: '',
    component: PerfilComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRoutingModule {}
