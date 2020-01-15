import uuidv4 from 'uuid/v4';
import moment from 'moment';
import { randomBytes, secretbox } from 'tweetnacl';
import util from 'tweetnacl-util'

class Invoice {
  constructor(data) {
    this.data = data;
  } 
  
  generate() {
    return {
      data: this.transform(),
      paymentToken: this.paymentToken
    }
  }

  get paymentToken() {
    let secret = util.decodeBase64(process.env.PAYMENT_GATEWAY_SECRET);
    let nonce = randomBytes(secretbox.nonceLength);
    let data =  util.decodeUTF8(JSON.stringify(this.transform()));

    let message = util.encodeBase64(
      secretbox(data, nonce, secret)
    )

    message += `.${util.encodeBase64(nonce)}`
    return message;
  }


  transform() {
    this.data['id'] = uuidv4();
    this.data['expiry'] = this.expiresOn;
    this.data['subject'] = 'Giftcards Belize - Redeem your giftcard!'
    this.data['fee'] = this.serviceFee

    return {
      amount: (this.data.price + this.serviceFee) * 2,
      asset: 'BZD',
      invoice: this.data
    }
  }

  get serviceFee() {
    return this.data.price * 0.13;
  }

  get expiresOn() {
    let nextMonth = moment().add(1, 'M')
    return nextMonth.format('YYYY-MM-dd')
  }
}

module.exports = Invoice;