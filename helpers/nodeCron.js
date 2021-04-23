const cron = require('node-cron');
const sendEmail = require('../helpers/nodeMailer')

cron.schedule('0 7 * * *', () => {
  await sendEmail ()
}  , {
  scheduled: true,
  timezone: "Asia/Singapore"
});

module.exports