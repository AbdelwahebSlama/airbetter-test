import { of } from "rxjs";
import { STUDENTS } from "./students-mock";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  public getStudents() {
    return of(STUDENTS);
  }

  public getStudentById(id: string) {
    return of(STUDENTS[Number(id)-1]);
  }

  public deleteStudentById(id: number) {
    // this.httpClient.post(url, {type: delete, id: id})
  }
}
