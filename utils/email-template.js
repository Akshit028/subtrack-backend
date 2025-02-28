export const generateEmailTemplate = ({
    userName,
    subscriptionName,
    renewalDate,
    planName,
    price,
    paymentMethod,
    accountSettingsLink,
    supportLink,
    daysLeft,
}) => `
  <div style="font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #2D3748; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F7FAFC;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
          <tr>
              <td style="background: linear-gradient(135deg, #4299E1 0%, #3182CE 100%); text-align: center; padding: 40px 20px;">
                  <p style="font-size: 42px; line-height: 1; font-weight: 800; margin: 0; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">Subtrack</p>
              </td>
          </tr>
          <tr>
              <td style="padding: 48px 35px;">                
                  <p style="font-size: 17px; margin-bottom: 25px; color: #2D3748;">Hello <strong style="color: #3182CE; font-weight: 600;">${userName}</strong>,</p>
                  
                  <p style="font-size: 17px; margin-bottom: 30px; line-height: 1.7;">Your <strong style="color: #2D3748;">${subscriptionName}</strong> subscription is set to renew on <strong style="color: #3182CE; font-weight: 600;">${renewalDate}</strong> <span style="color: #718096;">(${daysLeft} days from today)</span>.</p>
                  
                  <table cellpadding="20" cellspacing="0" border="0" width="100%" style="background-color: #EBF8FF; border-radius: 12px; margin-bottom: 30px;">
                      <tr>
                          <td style="font-size: 16px; border-bottom: 1px solid #BEE3F8; padding: 20px;">
                              <strong style="color: #2C5282;">Plan:</strong> 
                              <span style="color: #2D3748;">${planName}</span>
                          </td>
                      </tr>
                      <tr>
                          <td style="font-size: 16px; border-bottom: 1px solid #BEE3F8; padding: 20px;">
                              <strong style="color: #2C5282;">Price:</strong> 
                              <span style="color: #2D3748;">${price}</span>
                          </td>
                      </tr>
                      <tr>
                          <td style="font-size: 16px; padding: 20px;">
                              <strong style="color: #2C5282;">Payment Method:</strong> 
                              <span style="color: #2D3748;">${paymentMethod}</span>
                          </td>
                      </tr>
                  </table>
                  
                  <p style="font-size: 16px; margin-bottom: 30px; line-height: 1.7; color: #4A5568;">
                    If you'd like to make changes or cancel your subscription, please visit your 
                    <a href="${accountSettingsLink}" style="color: #3182CE; text-decoration: none; font-weight: 500; border-bottom: 2px solid #BEE3F8;">account settings</a> 
                    before the renewal date.
                  </p>
                  
                  <div style="background-color: #F7FAFC; border-radius: 12px; padding: 25px; margin: 35px 0; text-align: center;">
                    <p style="margin: 0; font-size: 16px; color: #4A5568;">
                      Need assistance? Our support team is here to help!<br>
                      <a href="${supportLink}" style="display: inline-block; margin-top: 15px; padding: 12px 25px; background-color: #3182CE; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 500; transition: all 0.2s;">Contact Support</a>
                    </p>
                  </div>
                  
                  <p style="font-size: 16px; margin-top: 35px; color: #4A5568;">
                      Best regards,<br>
                      <strong style="color: #2D3748;">The SubDub Team</strong>
                  </p>
              </td>
          </tr>
          <tr>
              <td style="background-color: #F7FAFC; padding: 30px; text-align: center;">
                  <p style="margin: 0 0 15px; color: #718096; font-size: 14px;">
                      SubDub Inc. | 123 Main St, Anytown, AN 12345
                  </p>
                  <p style="margin: 0; font-size: 14px;">
                      <a href="#" style="color: #3182CE; text-decoration: none; margin: 0 10px; font-weight: 500;">Unsubscribe</a> | 
                      <a href="#" style="color: #3182CE; text-decoration: none; margin: 0 10px; font-weight: 500;">Privacy Policy</a> | 
                      <a href="#" style="color: #3182CE; text-decoration: none; margin: 0 10px; font-weight: 500;">Terms of Service</a>
                  </p>
              </td>
          </tr>
      </table>
  </div>
  `;

export const emailTemplates = [
    {
        label: "7 days before reminder",
        generateSubject: (data) =>
            `📅 Reminder: Your ${data.subscriptionName} Subscription Renews in 7 Days!`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 7 }),
    },
    {
        label: "5 days before reminder",
        generateSubject: (data) =>
            `⏳ ${data.subscriptionName} Renews in 5 Days – Stay Subscribed!`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 5 }),
    },
    {
        label: "2 days before reminder",
        generateSubject: (data) =>
            `🚀 2 Days Left!  ${data.subscriptionName} Subscription Renewal`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 2 }),
    },
    {
        label: "1 days before reminder",
        generateSubject: (data) =>
            `⚡ Final Reminder: ${data.subscriptionName} Renews Tomorrow!`,
        generateBody: (data) => generateEmailTemplate({ ...data, daysLeft: 1 }),
    },
];