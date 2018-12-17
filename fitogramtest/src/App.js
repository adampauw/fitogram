import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
          {
            "id": "string",
            "virtualId": "string",
            "name": "string",
            "startDateTime": "2018-12-17T12:51:49.735Z",
            "endDateTime": "2018-12-17T12:51:49.735Z",
            "seats": 0,
            "seatsBooked": 0,
            "seatsWaiting": 0,
            "status": "ToBeDone",
            "color": "string",
            "notes": "string",
            "archived": true,
            "public": true,
            "onlineCancellationEnabled": true,
            "onlineCancellationHours": 0,
            "onlineCancellationCreditHours": 0,
            "bookingWindowEnabled": true,
            "bookingWindowStartHours": 0,
            "bookingWindowEndHours": 0,
            "waitingListEnabled": true,
            "eventSeriesId": 0,
            "eventGroup": {
              "id": 0,
              "number": "string",
              "archived": true,
              "public": true,
              "name": "string",
              "type": "Class",
              "autoBooking": true,
              "imageUrl": "string",
              "coursikaText": "string",
              "categories": [
                {
                  "id": 0,
                  "name": "string"
                }
              ]
            },
            "location": {
              "id": 0,
              "name": "string",
              "city": "string",
              "street": "string",
              "howToFind": "string",
              "detailsUrl": "string"
            },
            "trainers": [
              {
                "id": 0,
                "name": "string",
                "imageUrl": "string",
                "descriptions": [
                  {
                    "id": "00000000-0000-0000-0000-000000000000",
                    "language": "DE",
                    "text": "string"
                  }
                ]
              }
            ],
            "resources": [
              {
                "id": 0,
                "name": "string",
                "color": "string"
              }
            ],
            "bookings": [
              {
                "id": 0,
                "status": "Booked",
                "customer": {
                  "id": 0,
                  "firstname": "string",
                  "lastname": "string",
                  "type": "Active",
                  "tags": [
                    {
                      "name": "string",
                      "color": "string"
                    }
                  ]
                }
              }
            ],
            "descriptions": [
              {
                "id": "00000000-0000-0000-0000-000000000000",
                "language": "DE",
                "text": "string"
              }
            ]
          }
        ]
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <body className="App-body">
        {
          this.state.events.map(event => (
            <div class='courses'>
              <div class='course-img'>
                <img src={event.imageUrl} className="App-logo" alt="logo" />
              </div>
              <div id='practice-text'>
                <div class='course-mid'>
                  <div id="table">
                    <div class="tr">
                      <div class="td">Mo. 08 Sep. 2017</div>
                      <div class="td">Ashtanga Yoga</div>
                    </div>
                    <div class="tr">
                      <div class="td">Wechselnde</div>
                      <div class="td">Clarrisa Biskupic</div>
                    </div>
                  </div>
                </div>
                <div class='course-right'>
                  <button type="button">Zür Bechtung</button>
                </div>
              </div>
              <div class='description'>
                <p>Yoga für Einsteiger: Sie haben bisher keine oder wenig Erfahrung mit Yoga? Kein Problem und herzlich Wilkommen</p>
              </div>
            </div>
          ))
        }
        </body>
      </div>
    );
  }
}

export default App;
