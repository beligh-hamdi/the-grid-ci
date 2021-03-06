import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-hacker-search',
  templateUrl: './hacker-search.component.html',
  styleUrls: ['./hacker-search.component.scss']
})
export class HackerSearchComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  @Output() newSearch =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.searchTerm.valueChanges.debounceTime(500).subscribe(term => {
      this.newSearch.emit(term);
    });
  }
}
