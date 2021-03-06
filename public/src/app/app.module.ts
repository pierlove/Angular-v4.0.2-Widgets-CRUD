import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetService } from './widget/widget.service';
import { WidgetEditComponent } from './widget/widget-edit/widget-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    WidgetEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
