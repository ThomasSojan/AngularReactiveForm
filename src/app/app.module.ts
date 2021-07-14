import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomStructuralDirective } from './custom-structural.directive';
import { CustomAttributeDirective } from './custom-attribute.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { uNameValidator } from './template-form/uName.validator';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    //components, directives, pipes, validators
    AppComponent,
    CustomStructuralDirective,
    CustomAttributeDirective,
    ChildComponent,
    TemplateFormComponent,
    uNameValidator,
    ReactiveFormComponent,
  ],
  imports: [
    // all modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ,//services
    /* LoginService */
  ],
  bootstrap: [AppComponent], //starting component for the app
})
export class AppModule {}
