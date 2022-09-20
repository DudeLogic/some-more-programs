/*
Given two objects find the missing fields or differences in values in them.

NOTE: There will not be any array present in the object.

json1 = {
  "MARKDOWN": {
    "GOTIT": "Got it",
    "WRITE": "Write with confidence",
    "RESULT": "Final Result",
    "CUSTOMER": {
      "PEOPLE": "people",
      "NAME": "Name",
      "PHONE": "Phone",
      "EMAIL": "Email",
      "VISIT": "Visit"
    }
  },
  "titleYoureNext": "You're the next person in line"
}

json2 = {
  "MARKDOWN": {
    "GOTIT": "Got it",
    "RESULT": null,
    "WRITE": "Write with confidence",
    "CUSTOMER": {
      "PEOPLE": "people",
      "NAME": "Name",
      "PHONE": "Phone",
      "EMAIL": "Email"
    }
  },
  "titleYoureNext": "You're next in line",
  "BookingConfirmed": "Booking confirmed",
}


output (in json)

Missing or diffeence of fields on json2 comparing with json1
{
  MARKDOWN: { RESULT: 'Final Result', CUSTOMER: { VISIT: 'Visit' } },
  titleYoureNext: "You're the next person in line"
}
Missing or diffeence of fields on json1 comparing with json2
{
  MARKDOWN: { RESULT: null, CUSTOMER: {} },
  titleYoureNext: "You're next in line",
  BookingConfirmed: 'Booking confirmed'
}
*/

const json1 = {
  "MARKDOWN": {
    "GOTIT": "Got it",
    "WRITE": "Write with confidence",
    "RESULT": "Final Result",
    "CUSTOMER": {
      "PEOPLE": "people",
      "NAME": "Name",
      "PHONE": "Phone",
      "EMAIL": "Email",
      "VISIT": "Visit"
    }
  },
  "titleYoureNext": "You're the next person in line"
}

const json2 = {
  "MARKDOWN": {
    "GOTIT": "Got it",
    "RESULT": null,
    "WRITE": "Write with confidence",
    "CUSTOMER": {
      "PEOPLE": "people",
      "NAME": "Name",
      "PHONE": "Phone",
      "EMAIL": "Email"
    }
  },
  "titleYoureNext": "You're next in line",
  "BookingConfirmed": "Booking confirmed",
}



function compare(obj1, obj2, finalObj = {}) {
  for (const key in obj1) {
    if (obj2[key] === obj1[key]) {
      continue;
    } else if (typeof obj2[key] !== typeof obj1[key]) {
      finalObj[key] = obj1[key];
    } else if (typeof obj2[key] === "object") {
      finalObj[key] = {};
      compare(obj1[key], obj2[key], finalObj[key]);
    } else if (obj2[key] !== obj1[key]) {
      finalObj[key] = obj1[key];
    }
  }
  return finalObj;
}

console.log("Missing or diffeence of fields on json2 comparing with json1");
console.log(compare(json1, json2));

console.log("Missing or diffeence of fields on json1 comparing with json2");
console.log(compare(json2, json1));