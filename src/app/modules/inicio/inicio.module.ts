import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ComponentsModule } from '../../components/components.module';
import { InicioRoutingModule } from './inicio-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, InicioRoutingModule, RouterModule, ComponentsModule],
})
export class InicioModule {}
