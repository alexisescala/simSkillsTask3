import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TooltipDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [MatTooltip ],
  bootstrap: [AppComponent],
})
export class AppModule {}
