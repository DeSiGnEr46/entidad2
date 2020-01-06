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


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'panelAdmin', component: PanelAdministracionComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardService] },
  { path: 'editar/:id', component: EditarUsuarioComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'eluser/:id', component: EliminarUsuarioComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);