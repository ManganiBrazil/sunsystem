import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Filter} from "../model/filter.interface";
import {FilterService} from "../service/filter.service";
import {FilterResponse} from "../model/filter-response.model";

@Component({
  selector: 'bp-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterForm: FormGroup = this.initForm();
  filterValues: Array<Filter> = [];

  constructor(private formBuilder: FormBuilder,
              private filterService: FilterService) {

  }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.initForm();
    this.initSelect();
  }

  private initForm(): FormGroup {

    this.filterForm.setControl()


    return this.formBuilder.group({filter: 1, code: '', nameNumber: ''});
  }

  private initSelect(): void {
    this.filterValues = this.filterService.loadCombo();
  }

  get filterName(): string | undefined {
    return this.filterService.findFilter(this.filterForm.value['filter']);
  }

  submit() {
    this.filterService.find().subscribe((resp: FilterResponse) => {
      console.log(resp.desc);
    });
  }
}
