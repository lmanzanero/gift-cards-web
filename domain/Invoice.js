const uuidv4 = require('uuid/v4');
const moment = require('moment')

export default class Invoice {
  constructor(data) {
    this.data = data;
  }
  
  generate = () => {
    return {
      data: this.transform(),
      paymentToken: 'd'
    }
  }

  #transform = () => {
    this.data['id'] = uuidv4();
    this.data['expiry'] = this.expiresOn();
    this.data['subject'] = 'Giftcards Belize - Redeem your giftcard!'
    this.data['fee'] = this.calculateServiceFee()

    return {
      amount: (this.data.price + this.calculateServiceFee()) * 2,
      asset: 'BZD',
      invoice: this.data
    }
  }

  #calculateServiceFee = () => {
    return this.data.price * 0.13;
  }

  #expiresOn = () => {
    let nextMonth = moment().add(1, 'M')
    return nextMonth.format('YYYY-MM-dd')
  }
}