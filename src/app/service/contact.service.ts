import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://script.google.com/macros/s/AKfycbz0WfIbzGZKUghFvllPd34tJyD-jo9-RAV_Pj2i9X1asLf3S3_2xcZtZ3yW1u1WTi_0/exec'

  constructor( private http: HttpClient) { }

  public postMessage(input:any){
    console.log(input)
    return this.http.post(this.api, input).pipe(
      map( 
        (response:any) => {
          if (response){
            return response
          }
        },
        (error:any) => {
          return error
        }
      )
    )
  }
}