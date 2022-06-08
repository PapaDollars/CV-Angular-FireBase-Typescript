import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SplitterModule} from 'primeng/splitter';
import {FieldsetModule} from 'primeng/fieldset';
import {TimelineModule} from 'primeng/timeline';
import {SidebarModule} from 'primeng/sidebar';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirebaseService } from './firebase.service';
import { NgModel } from '@angular/forms';

import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { DialogModule } from "primeng/dialog";
import {ProgressBarModule} from 'primeng/progressbar';
import { SigninComponent } from './signin/signin.component';
<<<<<<< Updated upstream
import {TemplatesComponent} from './home/templates/templates.component';
import {Template1Component} from './home/templates/template1/template1.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { DiplomaComponent } from './home/diploma/diploma.component';
import { CompetenceComponent } from './home/competence/competence.component';
import { FormationComponent } from './home/formation/formation.component';
import { InformationComponent } from './home/information/information.component';
import { ResumeComponent } from './home/resume/resume.component';
import { EmailserviceService } from './emailservice.service';
=======
import { DiplomaComponent } from './diploma/diploma.component';

>>>>>>> Stashed changes
@NgModule({
  declarations: [
    AppComponent,
      SigninComponent,
<<<<<<< Updated upstream
      HomeComponent,
      DiplomaComponent,
      CompetenceComponent,
      FormationComponent,
      InformationComponent,
      ResumeComponent,
      TemplatesComponent,
      Template1Component,
=======
      DiplomaComponent
>>>>>>> Stashed changes
   ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    ScrollPanelModule,
    SplitterModule,
    FieldsetModule,
    TimelineModule,
    CardModule,
    DialogModule,
    ProgressBarModule,
    SidebarModule,
    TabViewModule,
    ReactiveFormsModule,
    InputTextModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [FirebaseService,EmailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
