import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/log/login/login.component';
import { SignupComponent } from './componentes/log/signup/signup.component';
import { PanelAdministracionComponent } from './componentes/panel-administracion/panel-administracion.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { AuthGuardService } from './servicios/auth-guard.service';
import { AdminGuardService } from './servicios/admin-guard.service';
import { EliminarUsuarioComponent } from './componentes/eliminar-usuario/eliminar-usuario.component';
import { WorldStateComponent } from './componentes/world-state/world-state.component'
import { AddTransactionComponent } from './componentes/add-transaction/add-transaction.component';
import { EditarTransaccionComponent } from './componentes/editar-transaccion/editar-transaccion.component';
import { TransHistorialComponent } from './componentes/trans-historial/trans-historial.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'world-state', component: WorldStateComponent, canActivate: [AuthGuardService]},
  { path: 'panelAdmin', component: PanelAdministracionComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardService] },
  { path: 'editar/:id', component: EditarUsuarioComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'eluser/:id', component: EliminarUsuarioComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'edtrans/:id/:channel', component: EditarTransaccionComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'transhist/:id/:channel', component: TransHistorialComponent, canActivate: [AuthGuardService] },
  { path: 'addtrans', component: AddTransactionComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);