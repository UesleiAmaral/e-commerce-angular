import { BookService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;
  bookService!: BookService
  constructor(BookService: BookService) {
    this.bookService = BookService;
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBooks().subscribe((data => {
      this.livros = data;
    }
    ))
  }

}
