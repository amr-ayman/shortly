import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../service/custom-validators/custom-validators.service';
import {HttpService} from '../../../../core/http/http.service';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenUrlComponent implements OnInit {

  shortenUrlForm: FormGroup;
  urls = [];

  constructor(private formBuilder: FormBuilder, private http: HttpService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.shortenUrlForm = this.formBuilder.group({
      url: ['', [Validators.required, CustomValidators.isURL]]
    });
  }

  onSubmit() {
    if (!this.shortenUrlForm.valid) {
      return;
    } else {
      const fullUrl = this.shortenUrlForm.get('url').value;
      const body = {
        url: fullUrl
      };
      this.http.post('https://rel.ink/api/links/', body).subscribe(response => {
        const url = {
          fullUrl,
          shortUrl: `https://rel.ink/${response.hashid}`,
          isCopied: false
        };
        this.urls.push(url);
        this.shortenUrlForm.reset();
      });
    }
  }

  onCopy(link) {
    this.urls.map(url => {
      url.isCopied = link === url;
    });
  }

}
