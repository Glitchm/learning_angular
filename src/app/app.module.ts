import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServerComponent} from './server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertErrorComponent,
    AlertSuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
