export default {
  port: 1337,
  dbUri: "mongodb://127.0.0.1:27017/rest-api-tutorial", //I needed to use the ip address instead of localhost, don't know why
  /**
   * MORE INFO ON THIS ISSUE (suggestion from GPT-3)
   * Sometimes, using localhost can resolve to the IPv6 address ::1, and if MongoDB is not configured to listen on IPv6, it might refuse the connection.
   * Try using the IPv4 address (127.0.0.1) in your connection string.
   */
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  /**
   * Open a terminal and type the following command to generate a 2048-bit private key:
   * openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
   * This command creates a private key file named private_key.pem.
   * Once you have the private key, you can extract the public key from it using the following command:
   * openssl rsa -pubout -in private_key.pem -out public_key.pem
   * This command generates a public key file named public_key.pem from the private key.
   */
  publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4dKnwrcx3Vi0ubop1yWH
FHlC6KOVsYsBv/OFQyJZ3o3UZiN62kwP3d8Kq1v2vE+Fc/FzaT+dOXw9Zp11EwB7
Ke1JnuwQm9xY1LkN2hWVR7aJblcIN2F335BgkTATul7g1FW9quNsXFSFgXhC/fBu
AthZJiTEafvNT1D6NwS81gHPvLGWrO7bMFJzJaK1B0yzVSdb9rbbz3kn55VdpXc9
BvAWu3303ARSrQPvAYnxYSM9b1LUT5FXKkbywnGu0kJ+4m71Ko4ZIZbE5YMfnOkn
kg/o5BmyeA68oibXznmAhQxDfQfCP9IWeNBVe3+DYbEoJ+faf6gEaETHg0ECGss8
qwIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDh0qfCtzHdWLS5
uinXJYcUeULoo5WxiwG/84VDIlnejdRmI3raTA/d3wqrW/a8T4Vz8XNpP505fD1m
nXUTAHsp7Ume7BCb3FjUuQ3aFZVHtoluVwg3YXffkGCRMBO6XuDUVb2q42xcVIWB
eEL98G4C2FkmJMRp+81PUPo3BLzWAc+8sZas7tswUnMlorUHTLNVJ1v2ttvPeSfn
lV2ldz0G8Ba7ffTcBFKtA+8BifFhIz1vUtRPkVcqRvLCca7SQn7ibvUqjhkhlsTl
gx+c6SeSD+jkGbJ4DryiJtfOeYCFDEN9B8I/0hZ40FV7f4NhsSgn59p/qARoRMeD
QQIayzyrAgMBAAECggEAZZQTyUcNY5MczDR80J29WszG941p7vBny5e3WIDxquXi
ZkVMZDh1pKhJDNazsHYWwhYYg33Nc8e6eNeYC4GaZTwq8xUdzXY68QkCvZgay6TE
wgDdHcg2mzY+8eAN57X47RpaVC2zlv6gBSJ7A+4sFhSKWVmNjlzpN+Xlf20eoiZa
2BbNbviW4llPwS1l0AfxNL4It4gQhBfy0vVBaSyr2pCQ2pgxDAkDQDSS7mQlWXIj
gRZOoddy6YT9AWsKkkyhSkhqImnQcpMOO/pinmZy3DgdC2fAvDynfHSJJ+gAstx9
V8R+ZJC3Uneq9ZtVjHs+vxhtn2Gwh/IRUYk2ismEuQKBgQD9WtukoIpH2UyGkAvM
qTiKtTBFpZORITCI10AyrO9bW+zk4kQNzTzQ45bH2v3mulE+cOsjtS52a6/vTSXo
8mYUgO6oDO1Nbrglmg/IGJ3mq1T8b4hYTYf1Rqv/xvQvKJ1zUTsQRMPz5yUrllLw
/pVdDNgGMaEz2Gi/E5g8YUAXiQKBgQDkLjZgdXFqhXWJ6ZfEeiXGxrp9liWs0TuV
QYtSikK4zavIQ0HnVWoajcpf3tRdPXLgVTvQ/jvzHaMcL8sN74irrTcXa3IlfgOx
CkoDjHcLb9DnqELUi6UcKhJxn7GIEBGHIc9gkDXuMbgbmDj+MSJJeyPdohA2J6es
wQGhdvixkwKBgQDGsSvSd0kbQfK/EVb/obLDLYf3Bvys8++BUfZ6B6AL8RLfCgg/
HrdURzin8jnvai1vH9V5Ao22t4uZy9IwV3HxIJCKYOD2Oh/W9XTtA0lKbxHOi5XN
UriOhmc7yAcWuO6KUqlUf+mBbcR743+WmsH+4KTGbsOyykSTncVljQtbqQKBgCuF
dPGo9NzwX57SYxQiiBoFxYQ2ozD3J3osajpwDJHbCKzFx0gsTnSKHtNyWOb/1W1c
VHBkTWLtgDLcGsqpqVO1UhCxebAU/PdDkyJiJEKWLS5CNZz8lZ1tmN77Ko1dIzq3
BCrS1rZ73TXGLvisvnFtf0XCp3zsy1pz5a+6VWzpAoGBAMa3KE4Y1E+TiyEJIGn3
DAwKAYfOJjB9UaJsqRSferaUAH4A7qZ0QqBsV+T3+atjKkivkRWHk9fKXtHlLmU/
DiSFs9wP0xXJFs/AXpqWVknK5Varb4idHn7JdqZF/5m4bPcf3fzlkJYuibwlZ9/q
UIs/sLM36jWf4IQURBM9M5YU
-----END PRIVATE KEY-----`,
};
