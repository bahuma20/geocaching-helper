import {Component} from 'angular2/core';
import {GeocacheService} from '../../services/geocache-service';
import {IONIC_DIRECTIVES} from 'ionic-angular/index';

@Component({
  selector: 'load-data-from-file',
  templateUrl: 'build/components/loadDataFromFile/load-data-from-file.html',
  directives: [IONIC_DIRECTIVES]
})
export class LoadDataFromFileComponent {
  parsedJSON: Object[];
  fileReader: FileReader= new FileReader();
  errors: string[] = [];
  fileSelected: boolean = false;
  fileName: string = '';

  constructor(public geocacheService: GeocacheService) {
    let self: LoadDataFromFileComponent = this;

    this.fileReader.onload = function(e: ProgressEvent) {
      let result = e.target['result'];
      try {
        self.parsedJSON = JSON.parse(result);

        // Import the file into the geocache Service
        self.geocacheService.importDataFromJSON(self.parsedJSON);
        self.fileSelected = true;
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
      this.fileName = file.name;
      this.fileReader.readAsText(file);
    } else {
      this.errors.push('Dateiformat nicht unterstuetzt');
    }
  }

  ejectCurrentFile(event) {
    this.fileSelected = false;
    this.fileName = '';
    this.geocacheService.entries = [];
  }

  validateFile(file: File): boolean {
    return true;
  }
}
