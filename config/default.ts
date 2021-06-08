export default {
  port: 5000,
  host: "localhost",
  mongoURI: "mongodb://localhost:27017/rest-api-typescript",
  saltWorkFactor: 10,
  accessTokenTTL: "15m",
  refreshTokenTTL: "1y",
  privateKey: `
  -----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgQCLVK/nOnMAJVrmdyPTAVO1H1xwetj+mGei9Ka78Rp1ifhwZIQc
  yo/+LQ6UOSnel/wJ4o6AbNJkAUXuJEdV1nYLrypjbS7nPYWBFAWNu5uVsHa/Ii+1
  DVgZkbWb7zEaE1ozuY5yF5wP8y1vXrYdKX7NLPBEpmYkJBvH9ifnMyU4MQIDAQAB
  AoGAcy36EDuIT+mRgI2i5s7lBQi84RsdATK6EcMPhrRkvB/nafoeILLvYB6dO7kZ
  vLKFnyJTzSSotBU9WwVQl0wn3nivXbeULTPeBB1EDP1TEUmMLkxQLsy7nWXboZ+h
  o6lZZ8DPFXHSEMKaGm/kpB7Pd+iDDw6wGQBRmSkUQjj0MXUCQQDlXyy2mzbx6Ypc
  L0kxpJIzhj9tPd0DTZzDvmfDt3jUIkT8nxVWU/vw8or1rHvkDzsZigYxo1RonTHM
  B5isXX+rAkEAm4GJItLQeCmgfFONRxaPrbwjmZB3IldKiPtGUXqk+HK0bDRwiQ2p
  bqWaOBkJ+KNjmSl4RVBhqRArWgw34Jm7kwJAOTdQlAyL3DSBixVQkM2Ymrm2QK3Z
  3+UQYdOxVqUBwwj5ZHrae7pfcm9OMpJgJTeXant/qAoyGBZ+QYLzlquMGQJAH24Z
  B57QX9kaBMbmYR3gQF8sWtdmHNzDxdfzqHg/a6/TY6Nds3W9bw2tk/ULnON5N/W3
  x1qtwnvwJy0dBhpMXQJBAI/nMt+i+Dyw1O7ZXpaE3luBsnuHR35Tu/ewmByDoWWi
  iSK2C6CixmiNx0sCcuZNnwC1QckilMELbayhgRB4Jj0=
  -----END RSA PRIVATE KEY-----
  `,
};
