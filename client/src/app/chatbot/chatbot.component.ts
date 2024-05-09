import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  constructor(private http: HttpClient) {}
  message:any;
  chatForm = new FormGroup({
    content:new FormControl('',Validators.required)
  });
  async generateChatResponse(): Promise<void> {
    try {
      const content = this.chatForm.value.content ? this.chatForm.value.content : '';
      const url = `http://localhost:5000/chat?query=${encodeURIComponent(content)}`;
      this.message =  this.http.get(url);
    } catch (error) {
      console.error("Error generating chat response:", error);
      throw error;
    }
  }
  onSubmit() {
    this.generateChatResponse();
  }
}