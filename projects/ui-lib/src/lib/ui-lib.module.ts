import { NgModule } from '@angular/core';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { InputComponent } from './components/input/input.component';
import { CustomCompComponent } from './components/custom-comp/custom-comp.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    ButtonComponentComponent,
    InputComponent,
    CustomCompComponent,
    NavbarComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponentComponent,
    InputComponent,
    CustomCompComponent,
    NavbarComponent
  ]
})
export class UiLibModule { }
