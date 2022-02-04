import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopFrameComponent } from './top-frame/top-frame.component';
import { BottomFrameComponent } from './bottom-frame/bottom-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    TopFrameComponent,
    BottomFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
