import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/common/services/books/books.service';
import { SpinnerService } from 'src/app/common/services/spinner/spinner.service';
import { ROUTES_CONSTANTS } from 'src/app/constants/routes.constants';

@Component({
  selector: 'app-home-page-statistics-container',
  templateUrl: './home-page-statistics-container.component.html',
  styleUrls: ['./home-page-statistics-container.component.scss']
})
export class HomePageStatisticsContainerComponent implements OnInit {

  books = [];

  constructor(private router:Router, private booksService: BooksService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getBooksData();
  }

  goEditUser() {
    this.router.navigate([ROUTES_CONSTANTS.homePageEdit])
  }

  getBooksData() {
    this.spinnerService.spinnerLoading.next(true);
    this.booksService.getAllUserBooks().subscribe(data => {
      this.spinnerService.spinnerLoading.next(false);
      console.log("data:")
      console.log(data)
      this.books = data.data.books;
    });
  }

}
