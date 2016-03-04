import {Component} from 'angular2/core';
import {GeocacheService} from '../../services/geocache-service';

@Component({
  selector: 'export-data-to-file',
  templateUrl: 'build/components/exportDataToFile/export-data-to-file.html'
})
export class ExportDataToFileComponent {
  fileUrl: string;

  constructor (public geocacheService: GeocacheService) {}

  onClick(event: Event) {
    let jsonData = this.geocacheService.exportDataToJSON();
    let data = new Blob([jsonData], {type: 'application/json'});

    // Remove old file if exists
    if (this.fileUrl !== null) {
      window.URL.revokeObjectURL(this.fileUrl);
    }

    this.fileUrl = window.URL.createObjectURL(data);

    event.preventDefault();
  }
}
