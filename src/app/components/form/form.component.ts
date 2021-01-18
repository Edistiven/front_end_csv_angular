import { Component, OnInit } from '@angular/core';
import { CsvExportService } from 'src/app/services/csv-export.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  fileToUpload: File = null;
  data = {
    descripcion: null,
    fecha: this.convert(new Date)
  };

  constructor(public service:CsvExportService) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.service.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }


  convert(str) {
    if (!str) return null;
    const date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  guardar(): void {
    this.service.postRegistro(this.data).subscribe(res => {
       console.log(res);
    }, error => {
      console.error(error);
    })
  }

}
