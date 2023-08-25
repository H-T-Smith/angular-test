import { Component, OnInit } from '@angular/core';
import { CodexService } from '../codex.service';
import { JobomaticService } from '../jobomatic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-llm',
  templateUrl: './llm.component.html',
  styleUrls: ['./llm.component.css']
})
export class LlmComponent implements OnInit {

  constructor(private codexService: CodexService, private jobomaticService: JobomaticService) { }

  ngOnInit(): void {
  }



}
