import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from 'src/app/components/auth/login-form/login-form.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    ReactiveFormsModule,
    // Formulario reactivo
    FormsModule, //NgModule
    ReactiveFormsModule, // Validations
    InputTextModule,
    ButtonModule
  ]
})
export class AuthModuleModule { }
