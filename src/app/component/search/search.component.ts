import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchForm!:FormGroup;
  username! : string;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username : new FormControl(
        null,
        [Validators.required]
      )
    })
  }

  sendUser(){
    // console.log(this.searchForm.value);
    this.username = this.searchForm.value.username;
  }

}
