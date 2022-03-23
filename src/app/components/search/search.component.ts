import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('search') searchInput: any; // accessing the reference element

  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  applyFilter(val: string) {
    this.searchTermChange.emit(val);
  }

  cancel() {
    this.searchTermChange.emit('');
    this.searchTerm = '';
    this.searchInput.nativeElement.value = '';
  }
}
