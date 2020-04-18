import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
 result: any[];
 second: number;
 minute: number;
 hour: number;
 day: number;

 // Set the date we're counting down to
 // countDownDate = new Date('Jun 5, 2020 15:37:25').getTime();


  constructor() { }




 // Update the count down every 1 second
  x = setInterval(function() {
   const countDownDate = new Date('Jun 5, 2020 15:37:25').getTime();
   console.log('countDownDate ' + countDownDate);
   // console.log("aaaaaaaaaa");

    // Get todays date and time
   const now = new Date().getTime();

    // Find the distance between now an the count down date
   const distance = countDownDate - now;
   console.log('distance : ' + distance);

   console.log('now : ' + now);

    // Time calculations for days, hours, minutes and seconds
   const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
   console.log('days : ' + days);
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   console.log('hours : ' + hours);
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   console.log('minutes : ' + minutes);
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
   console.log('seconds : ' + seconds);

   this.second = seconds;
   console.log('second******* : ' + this.second);
   this.minute = minutes;
   console.log('minutes******* : ' + this.minute);
   this.hour = hours;
   console.log('hours******* : ' + this.hour);
   this.day = days;
   console.log('days******* : ' + this.day);

   document.getElementById('second').innerHTML = this.second + ' seconds';
   document.getElementById('minute').innerHTML = this.minute + ' minutes';
   document.getElementById('hour').innerHTML = this.hour + ' hours';
   document.getElementById('day').innerHTML = this.day + ' days';

    // Display the result in an element with id="demo"
    // this.result = [this.days, hours, minutes, seconds];
  }, 1000);

  ngOnInit(): void {

  }

}
