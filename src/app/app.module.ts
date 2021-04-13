import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { CatanBoardGeneratorComponent } from './catan-board-generator/catan-board-generator.component';
import { ExtensionBoardGeneratorComponent } from './extension-board-generator/extension-board-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    CatanBoardGeneratorComponent,
    ExtensionBoardGeneratorComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
