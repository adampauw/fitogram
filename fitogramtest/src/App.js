import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
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
            <img src={event.imageUrl} className="App-logo" alt="logo" />
              <div id='practice-text'>
                <h2>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</h2>
                <p>"Vivamus sagittis lacus vel augue laoreet rutrum faucibus     dolor auctor. Integer posuere erat a ante venenatis dapibus     posuere velit aliquet. Praesent commodo cursus magna, vel   scelerisque nisl consectetur et."</p>
                <span>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</span>
              </div>
          </div>
          ))
        }
        <header className="App-header"></header>
        <body className="App-body">
        </body>
      </div>
    );
  }
}

export default App;
