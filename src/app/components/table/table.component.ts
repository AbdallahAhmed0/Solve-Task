import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeader } from '../../core/models/table-header.model';
import { LanguageService } from '../../core/services/language.service';
import { TableRecord } from '../../core/models/table-record.model';
import { DirectionService } from '../../core/services/direction.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule,TranslateModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges {
  @Input() tableData: TableRecord[] = [];
  @Input() headers: TableHeader[] = [];

  @Input() totalItems: number = 0;
  constructor(public languageService: LanguageService,
              public directionService: DirectionService
  ) {

  }

  currentPage = 1;
  pageSize = 10;
  paginatedData: any[] = [];

  ngOnChanges() {
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedData = this.tableData.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.paginate();
  }

changePageSize(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  this.pageSize = +value;
  this.currentPage = 1;
  this.paginate();
}

  get totalPages(): number {
    return Math.ceil(this.tableData.length / this.pageSize);
  }

  get pages(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }
}
 

