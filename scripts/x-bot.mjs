import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const apiKey = process.env.X_API_KEY;
const apiSecret = process.env.X_API_SECRET;
const accessToken = process.env.X_ACCESS_TOKEN;
const accessSecret = process.env.X_ACCESS_TOKEN_SECRET;

if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
  console.error('❌ Missing X API credentials in .env');
  process.exit(1);
}

export const client = new TwitterApi({
  appKey: apiKey,
  appSecret: apiSecret,
  accessToken: accessToken,
  accessSecret: accessSecret,
});

export const rwClient = client.readWrite;

/**
 * Posts a single tweet or thread
 * @param {string | string[]} textOrThread 
 */
export async function postTweet(textOrThread) {
  try {
    if (Array.isArray(textOrThread)) {
      console.log(`🚀 Posting thread of ${textOrThread.length} tweets...`);
      const response = await rwClient.v2.tweetThread(textOrThread);
      console.log('✅ Thread posted successfully:', response);
      return response;
    } else {
      console.log('🚀 Posting tweet...');
      const response = await rwClient.v2.tweet(textOrThread);
      console.log('✅ Tweet posted successfully:', response);
      return response;
    }
  } catch (error) {
    console.error('❌ Error posting to X:', error);
    throw error;
  }
}

// Allow direct execution via CLI: node scripts/x-bot.mjs "My tweet message"
if (process.argv[1] === __filename) {
  const message = process.argv[2];
  if (!message) {
    console.log('ℹ️ Usage: node scripts/x-bot.mjs "Your tweet content here"');
    console.log('Verifying client initialization...');
    try {
      const me = await rwClient.v2.me();
      console.log('✅ Authenticated as:', me.data);
    } catch (e) {
      console.log('ℹ️ Note: GET /2/users/me might have endpoint restrictions on Free tier. Status:', e.code || e.message);
    }
  } else {
    postTweet(message);
  }
}
