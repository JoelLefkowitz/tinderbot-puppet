# Tinderbot puppet

Tinder Pupeteer scripts.

## Status

| Source     | Shields                                                                |
| ---------- | ---------------------------------------------------------------------- |
| Project    | ![latest_release] ![license] ![line_count] ![language_count]           |
| Health     | ![documentation] ![review_action] ![codacy_quality] ![codacy_coverage] |
| Publishers | ![npm_version] ![npm_downloads]                                        |
| Repository | ![open_issues] ![closed_issues] ![open_pulls] ![closed_pulls]          |
| Activity   | ![contributors] ![monthly_commits] ![last_commit]                      |

## Example

![Example usage][example]

## Installation

```bash
npm install -g tinderbot-puppet
```

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
git clone https://github.com/joellefkowitz/tinderbot
```

Compile the package

```bash
npm run build
```

An entrypoint is exposed in run.js

```bash
node dist/run.js
```

### Running with docker

```bash
docker pull joellefkowitz/tinderbot
docker run -it --rm -p 9222:9222 tinderbot
```

The remote host and port are exposed as environment variables

- remoteHost = 0.0.0.0
- remoteBrowserPort = 9222

## Tests

To run tests:

```bash
nps test
```

## Documentation

This repository's documentation is hosted on [Read the Docs](https://tinderbot-puppet.readthedocs.io/en/latest).

To generate the documentation locally:

```bash
quickdocs
```

## Linters

To run linters:

```bash
nps lint
```

## Formatters

To run formatters:

```bash
nps format
```

## Continuous integration

This repository uses GitHub Actions to lint and test each commit. Each commit should be formatted and its corresponding documentation should be updated.

## Versioning

This repository adheres to semantic versioning standards. For more information on semantic versioning visit [semver](https://semver.org).

Bump2version is used to version and tag changes. For example:

```bash
bump2version patch
```

## Changelog

Please read this repository's [changelog](CHANGELOG.md) for details on changes that have been made.

## Contributing

Please read this repository's guidelines on [contributing](CONTRIBUTING.md) for details on the process for submitting pull requests. Moreover, our [code of conduct](CODE_OF_CONDUCT.md) declares our collaboration standards.

## Contributors

- [Joel Lefkowitz](https://github.com/joellefkowitz) - Initial work

## Remarks

Lots of love to the open source community!

<p align='center'>
    <img width=200 height=200 src='https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif' alt='Be kind to your mind' />
    <img width=200 height=200 src='https://media.giphy.com/media/KEAAbQ5clGWJwuJuZB/giphy.gif' alt='Love each other' />
    <img width=200 height=200 src='https://media.giphy.com/media/WRWykrFkxJA6JJuTvc/giphy.gif' alt="It's ok to have a bad day" />
</p>

[latest_release]: https://img.shields.io/github/v/tag/joellefkowitz/tinderbot-puppet "Latest release"
[license]: https://img.shields.io/github/license/joellefkowitz/tinderbot-puppet "License"
[line_count]: https://img.shields.io/tokei/lines/github/joellefkowitz/tinderbot-puppet "Line count"
[language_count]: https://img.shields.io/github/languages/count/joellefkowitz/tinderbot-puppet "Language count"
[documentation]: https://img.shields.io/readthedocs/tinderbot-puppet "Documentation"
[review_action]: https://img.shields.io/github/actions/workflow/status/JoelLefkowitz/tinderbot-puppet/review.yml "Review action"
[codacy_quality]: https://img.shields.io/codacy/grade/a73118d332724935930464a45c9da3cc "Codacy quality"
[codacy_coverage]: https://img.shields.io/codacy/coverage/a73118d332724935930464a45c9da3cc "Codacy coverage"
[npm_version]: https://img.shields.io/npm/v/tinderbot-puppet "NPM Version"
[npm_downloads]: https://img.shields.io/npm/dw/tinderbot-puppet "NPM Downloads"
[open_issues]: https://img.shields.io/github/issues/joellefkowitz/tinderbot-puppet "Open issues"
[closed_issues]: https://img.shields.io/github/issues-closed/joellefkowitz/tinderbot-puppet "Closed issues"
[open_pulls]: https://img.shields.io/github/issues-pr/joellefkowitz/tinderbot-puppet "Open pull requests"
[closed_pulls]: https://img.shields.io/github/issues-pr-closed/joellefkowitz/tinderbot-puppet "Closed pull requests"
[contributors]: https://img.shields.io/github/contributors/joellefkowitz/tinderbot-puppet "Contributors"
[monthly_commits]: https://img.shields.io/github/commit-activity/m/joellefkowitz/tinderbot-puppet "Monthly commits"
[last_commit]: https://img.shields.io/github/last-commit/joellefkowitz/tinderbot-puppet "Last commit"
