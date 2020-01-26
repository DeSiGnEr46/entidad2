import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/log/login/login.component';
import { SignupComponent } from './componentes/log/signup/signup.component';
import { HomeComponent } from './componentes/home/home.component';
import { PanelAdministracionComponent } from './componentes/panel-administracion/panel-administracion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './componentes/eliminar-usuario/eliminar-usuario.component';
import { WorldStateComponent } from './componentes/world-state/world-state.component';

import { LogService } from './servicios/log.service';
import { AuthGuardService } from './servicios/auth-guard.service';
import { AdminGuardService } from './servicios/admin-guard.service';
import { UsuariosService } from './servicios/usuarios.service';
import { BlockchainService } from './servicios/blockchain.service';

import { APP_ROUTING } from './app.routes';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddTransactionComponent } from './componentes/add-transaction/add-transaction.component';
import { TransHistorialComponent } from './componentes/trans-historial/trans-historial.component';
import { EditarTransaccionComponent } from './componentes/editar-transaccion/editar-transaccion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PanelAdministracionComponent,
    PerfilComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    NavbarComponent,
    FooterComponent,
    WorldStateComponent,
    AddTransactionComponent,
    TransHistorialComponent,
    EditarTransaccionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LogService,
    AuthGuardService,
    AdminGuardService,
    UsuariosService,
    BlockchainService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
