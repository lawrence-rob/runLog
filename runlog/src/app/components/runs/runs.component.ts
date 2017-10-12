import { Component, OnInit } from '@angular/core';
import { RunService } from '../../services/run.service';
import { Run } from '../../models/Run';


@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.css']
})
export class RunsComponent implements OnInit {
runs:Run[];

  constructor(
    public runService:RunService
  ) { }

  ngOnInit() {
    this.runService.getRuns().subscribe(runs => {
      this.runs = runs;
      //console.log(this.runs);
    })
  }

}
