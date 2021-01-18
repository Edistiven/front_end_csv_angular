import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ListRecordsComponent } from './components/list-records/list-records.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CsvExportService } from './services/csv-export.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ListRecordsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CsvExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
