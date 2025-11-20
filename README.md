# Tinderbot puppet

Tinder Pupeteer scripts.

![Review](https://img.shields.io/github/actions/workflow/status/JoelLefkowitz/tinderbot-puppet/review.yaml)
![Version](https://img.shields.io/npm/v/tinderbot-puppet)
![Downloads](https://img.shields.io/npm/dw/tinderbot-puppet)
![Size](https://img.shields.io/bundlephobia/min/tinderbot-puppet)
![Quality](https://img.shields.io/codacy/grade/a73118d332724935930464a45c9da3cc)
![Coverage](https://img.shields.io/codacy/coverage/a73118d332724935930464a45c9da3cc)

## Example

![Example](docs/images/example.gif)

## Installing

```bash
npm install tinderbot-puppet
```

## Documentation

Documentation and more detailed examples are hosted on [Github Pages](https://joellefkowitz.github.io/tinderbot-puppet).

## Usage

Run chrome with an open port and sign in to tinder

```bash
google-chrome --remote-debugging-port=9222
```

Connect the bot to your browser session

```bash
tinderbot

🌈 Successfully started running in your browser! 🌈
```

### Extending locally

```bash
git clone https://github.com/joellefkowitz/tinderbot-puppet
```

Compile the package:

```bash
yarn build
```

Run the entrypoint:

```bash
node dist/main.js
```

## Tooling

### Dependencies

To install dependencies:

```bash
yarn install
```

### Tests

To run tests:

```bash
yarn test
```

### Documentation

To generate the documentation locally:

```bash
yarn docs
```

### Linters

To run linters:

```bash
yarn lint
```

### Formatters

To run formatters:

```bash
yarn format
```

## Contributing

Please read this repository's [Code of Conduct](CODE_OF_CONDUCT.md) which outlines our collaboration standards and the [Changelog](CHANGELOG.md) for details on breaking changes that have been made.

This repository adheres to semantic versioning standards. For more information on semantic versioning visit [SemVer](https://semver.org).

Bump2version is used to version and tag changes. For example:

```bash
bump2version patch
```

### Contributors

- [Joel Lefkowitz](https://github.com/joellefkowitz) - Initial work

## Remarks

Lots of love to the open source community!

<div align='center'>
    <img width=200 height=200 src='https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif' alt='Be kind to your mind' />
    <img width=200 height=200 src='https://media.giphy.com/media/KEAAbQ5clGWJwuJuZB/giphy.gif' alt='Love each other' />
    <img width=200 height=200 src='https://media.giphy.com/media/WRWykrFkxJA6JJuTvc/giphy.gif' alt="It's ok to have a bad day" />
</div>
