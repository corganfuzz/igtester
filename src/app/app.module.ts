import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxGridModule, IgxExcelExporterService, IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxSwitchModule, IgxToggleModule, IgxCheckboxModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridderComponent } from './gridder/gridder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxGridModule.forRoot(),
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxCheckboxModule
  ],
  providers: [IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
