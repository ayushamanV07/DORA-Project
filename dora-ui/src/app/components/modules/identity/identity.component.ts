import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpServiceService } from '../../../services/http.service';
import { CommonModule } from "@angular/common";
import { MatRadioModule, MatRadioChange } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatRadioModule, FormsModule, MatCardModule],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityComponent {
  panelOpenState = false;
  public questionList: any = [];
  selectedOption = "";
  selectedValue = false;

  constructor(private httpService: HttpServiceService) { }
  ngOnInit(): void {
    this.getAllQuestions();
    console.log(this.selectedOption)

  }

  getAllQuestions() {
    this.httpService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions[0].Identify;
        console.log(this.questionList)
      })
  }

  radioChange(event: MatRadioChange, selectedQuestion: string) {

    console.log(event.value)
    console.log(selectedQuestion)

  }
}
