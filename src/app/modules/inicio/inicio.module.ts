import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, ComponentsModule],
})
export class InicioModule {}
