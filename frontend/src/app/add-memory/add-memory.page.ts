import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MemoryService } from '../services/memory.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  styleUrls: ['./add-memory.page.scss'],
})
export class AddMemoryPage implements OnInit {

  memoryForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private memoryService: MemoryService,
    private photoService: PhotoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.memoryForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.memoryForm = this.formBuilder.group({
      place: ['', [Validators.required]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]]
    }),
    this.route.params.subscribe(params => {
      let id = params['id'];
    })
  }

  get errorControl() {
    return this.memoryForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.memoryForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.memoryService.createMemory(this.memoryForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/list-memories");
      })
    }
  }
}
