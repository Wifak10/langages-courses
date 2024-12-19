import { Routes } from "@angular/router";
import { MainContentComponent } from "./components/layout/main-content/main-content.component";
import { LoginFormComponent } from "./components/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./components/auth/register-form/register-form.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { GamesComponent } from "./components/games/games.component";
import { ResidentEvilComponent } from "./components/games/resident-evil/resident-evil.component";
const routes: Routes = [
  {
    path: "",
    component: MainContentComponent
  },
  {
    path: "login",
    component: LoginFormComponent
  },
  {
    path: "register",
    component: RegisterFormComponent
  },
  {
    path: "jeux",
    component: GamesComponent,
    children: [
      {
        path: 'residentevil',
        component: ResidentEvilComponent
      }
    ]
  },

  {
    path: "**",
    component: NotFoundComponent
  }
];
export default routes ;
