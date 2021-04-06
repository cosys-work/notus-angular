import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { OmniModule } from './components/omnipresent/omni.module';
import { VyoozModule } from './components/views/vyooz.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';
import { ReqNostrDirective } from './server/conn-ectome/req/dir/req-nostr.directive';
import { ReqPostrDirective } from './server/conn-ectome/req/dir/req-postr.directive';
import { ServerIgModule } from './server/server-ig.module';

@NgModule({
  declarations: [
    AppComponent,
    ReqNostrDirective,
    ReqPostrDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    OmniModule,
    VyoozModule,
    AuthModule,
    BrowserAnimationsModule,
    ServerIgModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
