# Text and Code Utilities powered by AI

AI has become an integral part of modern technology, and developers are utilizing it to create powerful applications. In this blog post, I'll be discussing my experience with creating a web app that incorporates the OpenAI API for various text and code utilities. I'll be outlining my process, from the initial design to the deployment of the application, and share some insights on how I incorporated the OpenAI API into my project.

## Developing the Web App

I decided to use ReactJS to create the web app, as it is a versatile and powerful framework that allows for quick development. I also used Vite as my build tool, as it is a lightweight build system that can quickly run applications in development mode.

For the OpenAI API, I utilized the OpenAI SDK, which is a library that provides an easy-to-use interface for using OpenAI's API. I used the SDK to create a simple text generation utility, which would generate text based on a given input.

Tech Stack >>

```
React JS for front end
Vite as the built tool
Tailwind CSS for designing the UI
Express JS for server side rendering
React Router for routes management
```

## Deployment

Once I finished developing the application, I needed to deploy it. I decided to use Vercel and Railway for deployment, as they offer easy and secure hosting. Using Vercel and Railway, I was able to quickly deploy the application and make it available to the public.

Github Link : [Github Link](https://github.com/ayazmirza54/text-code-util.aiprod)
Live URL : [AI-utilities](https://ai-utilities.in/)

## Explaning the functionality and code logic :

## Here's a quick flowchart for the logic of the app >

![App logic](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k20oyev60wmxqp89uylc.png)

Basically i have create 8 sepeate tools build into this app, each tools has components made for its functionality and i am using eight different functions to give custom prompt for different specific features of the App. I am passing different parameter to the OpenAI API for different type of tools to get the expected results. For each tools there is a different route made in the app and on the basis of the route i am passing diffenrent routes to server side of the app.

## Here is the server side code :

```js
import { Configuration, OpenAIApi } from "openai";
import express, { response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = 3080;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("AI server has been started");
});

async function getdata() {
  app.post("/simple-file-gen", async (req, res) => {
    const word = req.body.word || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatesimplewords(word),
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generatesimplewords(word));
  });
}
getdata();

async function getcmd() {
  app.post("/shell-command-gen", async (req, res) => {
    const cmd = req.body.cmd || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatecmd(cmd),
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generatecmd(cmd));
  });
}
getcmd();

async function getsql() {
  app.post("/sql-gen", async (req, res) => {
    const sql = req.body.sql || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatesql(sql),
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generatesql(sql));
  });
}
getsql();

async function getidea() {
  app.post("/idea-gen", async (req, res) => {
    const idea = req.body.idea || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generateidea(idea),
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generateidea(idea));
  });
}
getidea();

async function gettldr() {
  app.post("/tldr-gen", async (req, res) => {
    const tldr = req.body.tldr || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatetldr(tldr),
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generatetldr(tldr));
  });
}
gettldr();

async function getbug() {
  app.post("/bug-gen", async (req, res) => {
    const bug = req.body.bug || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatebug(bug),
      temperature: 0,
      max_tokens: 182,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generatebug(bug));
  });
}
getbug();

async function getcode() {
  app.post("/code-gen", async (req, res) => {
    const code = req.body.code || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatecode(code),
      temperature: 0,
      max_tokens: 182,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generatecode(code));
  });
}
getcode();

async function getarticle() {
  app.post("/article-gen", async (req, res) => {
    const article = req.body.article || "";
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatearticle(article),
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    });
    console.log(completion.data.choices[0].text);
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log(generatearticle(article));
  });
}
getarticle();

function generatesimplewords(word) {
  return `Explain the below topic to a second grader ${word}`;
}
function generatecmd(cmd) {
  return `Convert this text to a shell command:  ${cmd}`;
}
function generatesql(sql) {
  return `Generate SQL query for this prompt: ${sql}`;
}
function generateidea(idea) {
  return `Gereate some ideas around this prompt: ${idea}`;
}
function generatetldr(tldr) {
  return `Sumarize this:  ${tldr}`;
}
function generatebug(bug) {
  return `Find bug in this code:  ${bug}`;
}
function generatecode(code) {
  return `Explain this code:  ${code}`;
}
function generatearticle(article) {
  return `Generate an article for this topic:  ${article}`;
}

//create a simple express api
app.listen(port, () => {
  console.log(`AI server running on http://localhost:${port}`);
});
```

## Feature of the App >

- **AI text summarizer**> Summarize any log text
- **AI article generator** > Generate article about any topic
- **Shell command generator** > Generate shell commands on the basis of the promt
- **Code Explainer** > Expalin Code functionality
- **Bug Finder** > Find bugs in a given code
- **Ideas generator** > Generate ideas around a specific topic
- **Any text to simple Words** > Enter any topic to get explanation in simple words
- **Text to SQL Query** > Generate SQL queries for a given prompt

## Conclusion

By utilizing the OpenAI API, I was able to create a powerful web app that offers various text and code utilities. Using the OpenAI API, I was able to create a simple text generation utility that generated text based on a given input.

Overall, I am pleased with the results of the web app, and I am excited to explore more of OpenAI's API and see what other applications I can create. I am also looking forward to seeing what I can create by combining OpenAI's API with other technologies.
