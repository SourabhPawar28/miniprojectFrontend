import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { Book } from '../model/Book';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    let name ='user'
    let password ='user'
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(name + ':' + password)})
    return this.httpClient.get<User[]>('http://localhost:8080/users/get',{headers});
  }

  addUser(newUser: User) {
    let name ='user'
    let password ='user'
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(name + ':' + password)})
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser,{headers});
  }

  deleteUser(id) {
    let name ='user'
    let password ='user'
    const headers = new HttpHeaders({Authorization: 'Basic' + btoa(name + ':' + password)})
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id,{headers});
  }

  getBooks() {
    return this.httpClient.get<Book[]>('http://localhost:8080/books/get');
  }

  addUploadData(selectedFile) {
    return this.httpClient.post('http://localhost:8080/books/upload', selectedFile);
  }

  addBook(newBook) {
    return this.httpClient.post<Book>('http://localhost:8080/books/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>('http://localhost:8080/books/' + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>('http://localhost:8080/books/update', updatedBook);
  }
}