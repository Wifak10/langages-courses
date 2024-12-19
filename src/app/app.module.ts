import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { FormAddTaskComponent } from './components/tasks/form-add-task/form-add-task.component';
import { SearchTaskComponent } from './components/tasks/search-task/search-task.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { TaskGroupComponent } from './components/tasks/task-group/task-group.component';
import { TaskGroupListComponent } from './components/tasks/task-group-list/task-group-list.component';
import { TestComponent } from './components/tests/test/test.component';
import { AfficheListeLanguagesComponent } from './components/tests/affiche-liste-languages/affiche-liste-languages.component';
import { AfficheDetailLanguagesComponent } from './components/tests/affiche-detail-languages/affiche-detail-languages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GamesComponent } from './components/games/games.component';
import { ResidentEvilComponent } from './components/games/resident-evil/resident-evil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    MainContentComponent,
    NavComponent,
    FormAddTaskComponent,
    SearchTaskComponent,
    TaskComponent,
    TaskGroupComponent,
    TaskGroupListComponent,
    TestComponent,
    AfficheListeLanguagesComponent,
    AfficheDetailLanguagesComponent,
    NotFoundComponent,
    GamesComponent,
    ResidentEvilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
