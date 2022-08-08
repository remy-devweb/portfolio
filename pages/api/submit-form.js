// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  const SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;

  if (req.method === "POST") {

    try {
      await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${SECRET_KEY}&response=${req.body.token}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then(async (reCaptchaRes) => {
          if (reCaptchaRes?.score > 0.5) {
            // Save data to the database from here
            try {
              await notion.pages.create({
                parent: {
                  database_id: process.env.NOTION_DATABASE_ID,
                },
                properties: {
                  Name: {
                    title: [
                      {
                        text: {
                          content: req.body.name,
                        },
                      },
                    ],
                  },
                  Email: {
                    email: req.body.email,
                  },
                  Message: {
                    rich_text: [
                      {
                        text: {
                          content: req.body.message,
                        },
                      },
                    ],
                  },
                },
              });
              res.status(200).json({ msg: 'Success' });
            } catch (error) {
              res.status(500).json({ msg: 'There was an error' });
            }
          } else {
            console.log('fail1')
              res.status(500).json({
              status: "failure",
              message: "Google ReCaptcha Failure",
            });
          }
        });
    } catch (err) {
      console.log('fail2')
        res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    console.log('fail3')
    res.status(405);
    res.json({ message: `${req.method} requests are not allowed` });
    res.end();
  }
}