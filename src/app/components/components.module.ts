import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderToolbarComponent,
    GridComponent,
    GridItemComponent,
    NotFoundComponent,
    InputComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderToolbarComponent,
    GridComponent,
    GridItemComponent,
    InputComponent,
  ],
})
export class ComponentsModule {}
