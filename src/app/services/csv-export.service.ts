import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {
  
  private DATABASE_URL="http://127.0.0.1:8080/api/personas/";
  private URL="http://127.0.0.1:8080/api/registros";

  constructor(private httpCliente:HttpClient) { }

  postFile(fileToUpload: File){
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpCliente.post(endpoint, formData);
  }
  
  getPersonas(id): Observable<any>{
    return this.httpCliente.get(this.DATABASE_URL+id);
  }

  getRegistros(): Observable<any>{
    return this.httpCliente.get(this.URL);
  }
  
  postRegistro(data): Observable<any>{
    return this.httpCliente.post(this.URL, data);
  }
}
