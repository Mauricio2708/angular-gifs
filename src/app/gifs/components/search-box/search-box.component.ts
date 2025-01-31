import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `<h5>Buscar:</h5>
  <input type="text" placeholder="Buscar..." class="form-control"
  (keyup.enter)="searchTag()"
  #txtTagInput
  />`
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.serachTag(newTag);
    this.tagInput.nativeElement.value = "";
    console.log('newTag :', newTag);
  }
}
