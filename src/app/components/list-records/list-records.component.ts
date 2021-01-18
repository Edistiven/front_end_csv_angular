import { Component, OnInit } from '@angular/core';
import { CsvExportService } from '../../services/csv-export.service';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.css']
})

export class ListRecordsComponent implements OnInit {

  registros: any;

  constructor(public listService: CsvExportService ) { }

  ngOnInit(): void {
    this.getAllRegistros();
  }
  
  getAllRegistros(){
    this.listService.getRegistros().subscribe(res => {
      this.registros = res;
    }, error => {
      console.log(error);
    });
  }

  

}
