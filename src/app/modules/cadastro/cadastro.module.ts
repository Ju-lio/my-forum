import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [CommonModule, CadastroRoutingModule, ComponentsModule],
})
export class CadastroModule {}
