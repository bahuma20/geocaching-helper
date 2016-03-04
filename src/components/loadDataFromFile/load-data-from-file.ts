import {Component} from 'angular2/core';
import {GeocacheService} from '../../services/geocache-service';

@Component({
  selector: 'load-data-from-file',
  template: require('./load-data-from-file.html'),
  styles: [require('./load-data-from-file.css')]
})
export class LoadDataFromFileComponent {
  parsedJSON: Object[];
  fileReader: FileReader= new FileReader();
  errors: String[] = [];

  constructor(public geocacheService: GeocacheService) {
    let self: LoadDataFromFileComponent = this;

    this.fileReader.onload = function(e: ProgressEvent) {
      let result = e.target['result'];
      try {
        self.parsedJSON = JSON.parse(result);

        // Import the file into the geocache Service
        self.geocacheService.importDataFromJSON(self.parsedJSON);
      } catch (error) {
        self.errors.push(error.name + ': ' + error.message);
      }
    };
  }

  onFileChanged(event) {
    // Clear Errors
    this.errors = [];

    // Get the File
    let file: File = event.target.files[0];

    // Validate File
    if (this.validateFile(file)) {
      this.fileReader.readAsText(file);
    } else {
      this.errors.push('Dateiformat nicht unterstuetzt');
    }
  }

  validateFile(file: File): boolean {
    return true;
  }
}
