import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../model/Book';
import { HttpClientService } from '../../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  bookAddedEvent = new EventEmitter();
  
  private selectedFile;
  imgURL: any;
  

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveBook(){
    this.httpClientService.addBook(this.book).subscribe(
      (book) => {
        this.bookAddedEvent.emit();
        this.router.navigate(['admin', 'books']);
      }
    );
  }
}