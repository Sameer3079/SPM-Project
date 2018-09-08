import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule,MatSidenavModule,MatNativeDateModule,MatSelectModule,MatDatepickerModule,MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';
import { HttpClientModule } from '@angular/common/http'; 

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { RegisterService } from './page/register/register.service';
import { StudentComponent } from './dashboard/student/student.component';
import { CompanyComponent } from './dashboard/company/company.component';

import { FormI6Component } from './dashboard/studentForms/form-i6/form-i6.component';
import { VivaSchedulesComponent } from './dashboard/viva-schedules/viva-schedules.component';
import { ScheduleComponent } from './dashboard/viva-schedules/schedule/schedule.component'
import { FormI1P1Component } from './dashboard/studentForms/form-i1-p1/form-i1-p1.component';
import { FormI1P1Service } from './dashboard/studentForms/form-i1-p1/form-i1-p1.service';
import { FormI1P2Component } from './dashboard/studentForms/form-i1-p2/form-i1-p2.component';
import { CompanyService } from './dashboard/company/company.service';
import { DailyDiaryComponent } from './dashboard/studentForms/form-i3/daily-diary/daily-diary.component'
import { FormI3Component } from './dashboard/studentForms/form-i3/form-i3.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    StudentComponent,
    CompanyComponent,
    FormI1P1Component,
    FormI6Component,
    VivaSchedulesComponent,
    ScheduleComponent,
    FormI1P2Component,
    DailyDiaryComponent,
    FormI3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [SettingsService,
    RegisterService,CompanyService, FormI1P1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
