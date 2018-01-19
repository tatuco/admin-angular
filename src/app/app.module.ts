import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChatComponent } from './components/chat/chat.component';
import { StartChatComponent } from './components/start-chat/start-chat.component';
import { ContentComponent } from './components/content/content.component';
import { LoginComponent } from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {StatusComponent} from './auth/status/status.component';
import {LoginRedirect} from './services/login-redirect.service';
import {EnsureAuthenticatedService} from './services/ensure-authenticated.service';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingsComponent,
    ChatComponent,
    StartChatComponent,
    ContentComponent,
    LoginComponent,
    LogoutComponent,
    StatusComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, canActivate: [LoginRedirect] },
      { path: 'login', component: LoginComponent, canActivate: [LoginRedirect] },
      { path: 'register', component: RegisterComponent, canActivate: [LoginRedirect] },
      { path: 'home', component: StatusComponent, canActivate: [EnsureAuthenticatedService] }
    ])
  ],
  providers: [
    AuthService,
    EnsureAuthenticatedService,
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
