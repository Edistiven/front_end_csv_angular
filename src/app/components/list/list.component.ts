import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CsvExportService } from '../../services/csv-export.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  personas: any;
  id:string

  constructor( public listService: CsvExportService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAllPersonas();
  
  }

  getAllPersonas(){
    this.listService.getPersonas(this.id).subscribe(res => {
      this.personas = res;
    }, error => {
      console.log(error);
    });
  }
}
