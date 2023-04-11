# TestingBot

> A GitHub App built with [Probot](https://github.com/probot/probot) that name describes it all
> Filters profane words from issues and comments also warns user on use of these words.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t TestingBot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> TestingBot
```

## Contributing

If you have suggestions for how TestingBot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Manas-Tiwari
