var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2024CHCMP",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "radio",
      "choices": {
        "1": "Closest to Amp<br>",
        "2": "On the Amp side of the Speaker<br?>",
        "3": "Middle of the Speaker<br>",
        "4": "On the Source side of the Speaker<br>",
        "5": "Closest to Source<br>"
      }
    }
  ],
  "auton": [

    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Leave Starting Zone/Mobility",
      "code": "al",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Amp Missed",
      "code": "tam",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Speaker Missed",
      "code": "tsm",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "0": "Nothing<br>",
        "1": "Park<br>",
        "3": "Climb<br>",
        "8": "Trap<br>"
      },
      "defaultValue": "0"
    }
  ],
  "postmatch": [
    { "name": "Defense Rating",
      "code": "dr",
      "type": "counter"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "counter"
    },
    { "name": "Fouls",
      "code": "fls",
      "type": "counter"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
