import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoApp } from './app.component';
import { TodoStore } from './services/store';

@NgModule({
	imports:	[ BrowserModule, CommonModule, FormsModule ],
	declarations:	[ TodoApp ],
	bootstrap:	[ TodoApp ]
})
export class AppModule { }

