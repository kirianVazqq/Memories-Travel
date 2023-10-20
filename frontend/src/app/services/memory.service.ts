import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  endPoint = "http://localhost:8080/api/memories";

  constructor(private httpClient: HttpClient) { }

  getMemories(){
    return this.httpClient.get(this.endPoint);
  }

  createMemory(memory, blob){
    let formData = new FormData();
    formData.append("place", memory.place);
    formData.append("date", memory.date);
    formData.append("description", memory.description);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  deleteMemory(id) {
    return this.httpClient.delete(this.endPoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Memory deleted: ${id}`))
      );
  }

  // EDIT WITHOUT IMPLEMENTING
  editMemory(id, place, date, description, filename, updateAt ) {
    return this.httpClient.put<string>(this.endPoint +`/${id}`, {place, date, description, filename, updateAt});
  }
}
