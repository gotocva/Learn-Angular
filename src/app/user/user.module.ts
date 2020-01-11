import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';

import { UsersRoutingModule } from './user-routing.module';


@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}