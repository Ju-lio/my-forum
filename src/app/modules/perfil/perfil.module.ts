import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { ComponentsModule } from '../../components/components.module';
import { PerfilRoutingModule } from './perfil-routing.module';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [PerfilComponent, PostComponent],
  imports: [CommonModule, PerfilRoutingModule, RouterModule, ComponentsModule],
})
export class PerfilModule {}
