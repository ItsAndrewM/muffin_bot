# Muffin Bot

Muffin Bot is a Twitter bot that adds a touch of sweetness to your Twitter feed by sharing delightful pictures of muffins. Built using Node.js, this bot utilizes the Twitter API and the Pexels API to fetch high-quality images of muffins and automatically posts them on a designated Twitter account.

## Features

- **Automated Muffin Posting:** Muffin Bot leverages the Pexels API to search for captivating muffin pictures and seamlessly shares them on your Twitter account at regular intervals.
- **Customizable Posting Schedule:** You have full control over the frequency and timing of muffin posts, allowing you to tailor the bot's activity according to your preferences.
- **Diverse Muffin Selection:** Muffin Bot utilizes Pexels' extensive collection of images, ensuring a wide variety of muffins are showcased to cater to every muffin lover's taste.
- **User-Friendly Configuration:** Muffin Bot's configuration file allows you to easily set up your Twitter API credentials and adjust various settings without hassle.
- **Robust Error Handling:** Muffin Bot incorporates comprehensive error handling to ensure reliable operation and smooth user experience.

## Prerequisites

Before running Muffin Bot, make sure you have the following:

- **Node.js:** Muffin Bot is built using Node.js, so ensure you have it installed on your system. You can download and install Node.js from the official website: [nodejs.org](https://nodejs.org).
- **Twitter Developer Account:** Obtain Twitter API credentials by creating a developer account on the [Twitter Developer Portal](https://developer.twitter.com/). This will allow Muffin Bot to access your Twitter account and post tweets on your behalf.
- **Pexels API Key:** Sign up for a Pexels account and obtain an API key from the [Pexels API](https://www.pexels.com/api/) documentation. The API key is necessary to fetch muffin images from Pexels.

## Setup Instructions

1. Clone the Muffin Bot repository:

```bash
git clone https://github.com/ItsAndrewM/muffin_bot.git

```

2. Navigate to the project directory:

```bash
cd server
```

3. Install the required dependencies:
```bash
yarn install
```
4. Open the .env file and fill in your Twitter API credentials and Pexels API key:
```bash
TWITTER_API_KEY=YOUR_TWITTER_API_KEY
TWITTER_API_SECRET=YOUR_TWITTER_API_SECRET
TWITTER_ACCESS_TOKEN=YOUR_TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET=YOUR_TWITTER_ACCESS_TOKEN_SECRET
PEXELS_API_KEY=YOUR_PEXELS_API_KEY
```
5. Customize the bot's settings in the tweetPic.js, getPics.js and index.js file, such as the posting frequency and tweet format, according to your preferences.
6. Start the muffin bot:
```bash
node index.js
```
That's it! Muffin Bot will now begin sharing delightful pictures of muffins on your Twitter account based on the specified schedule.

## Contribution

If you encounter any issues, have suggestions for improvements, or want to contribute to Muffin Bot, feel free to create a pull request or open an issue on the GitHub repository.

Let's spread the joy of muffins together! 🧁

