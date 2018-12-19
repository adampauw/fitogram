import React, { Component } from 'react';
import logo from './logo.svg';
import img from './yoga-mnt.jpg';
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

            <div className="grid-container">
              <div className="image">
                <img src={img} alt="Yoga" />
                <span id="centered-text">Yoga Class</span>
              </div>
              <div className="detail-1 all-det">
                <ul>
                  <li id="bold">Mo. 08 Sep. 2017</li>
                  <li>12:00 - 13:00</li>
                </ul>
              </div>
              <div className="detail-2 all-det">
               <ul>
                  <li>Ashtanga Yoga</li>
                  <li>Anfanger</li>
                </ul>
              </div>
              <div className="detail-3 all-det">
                <ul>
                  <li>Wechselnde</li>
                  <li>Standorte</li>
                </ul>
              </div>
              <div className="detail-4 all-det">
              <ul>
                  <li>Clarissa</li>
                  <li>Biskupic</li>
                </ul>
              </div>
              <div className="description all-det">
                <span>Yoga für Einsteiger: sie haben bischer keine oder wenig Ehrfahrung mit yoga? Kein problem und herlich<a href='#'>..more</a></span>
              </div>
              <div className="button all-det">
                <button>Zür Buchung</button>
              </div>
              <div className="place all-det">
                <ul>
                  <li>Buchung bis:</li>
                  <li>Do. 10 Sept 2018 - 09:00Uhr</li>
                </ul>
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
