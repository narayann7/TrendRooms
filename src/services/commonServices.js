import { Buffer } from "buffer";
class CommonServices {
  static Base64Encode(str) {
    var encode = Buffer.from(str).toString("base64");
    return encode;
  }
  static Base64Decode(str) {
    var decode = Buffer.from(str, "base64").toString("ascii");
    return decode;
  }
}

export default CommonServices;
