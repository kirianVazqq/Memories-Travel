import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemoryService } from '../services/memory.service';

@Component({
  selector: 'app-list-memory',
  templateUrl: './list-memory.page.html',
  styleUrls: ['./list-memory.page.scss'],
})
export class ListMemoryPage implements OnInit {
  memories: any = [];

  constructor(private memoryService: MemoryService, private router: Router) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getAllMemories();
  }

  getAllMemories() {
    this.memoryService.getMemories().subscribe((memory) => {
      this.memories = memory;
    });
  }

  // DECOMMENT:
  addMemory() {
    this.router.navigateByUrl('/add-memory');
  }
  editMemory(id) {
    this.router.navigateByUrl('/add-memory/', id);
  }

  deleteMemory(id) {
    console.log(id);
      this.memoryService.deleteMemory(id).subscribe(() => {
        this.ionViewDidEnter();
        console.log('Campo borrado');
      });
    }
  }

