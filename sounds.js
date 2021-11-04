const sounds = new Howl({
  "src": [
    "public\sounds\sounds.webm",
    "public\sounds\sounds.mp3"
  ],
  "sprite": {
    "jump": [
      0,
      783.6734693877551
    ],
    "okandi_cmwif_m8.mp3": [
      2000,
      259715.78231292518
    ],
    "run": [
      263000,
      313.4693877551058
    ]
  }
})

sounds.play('okandi_cmwif_m8')()

