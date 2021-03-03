# Tinderbot

Tinder Pupeteer scripts.

## Status

| Source     | Shields                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| Project    | ![release][release_shield] ![license][license_shield] ![dependents][dependents_shield]                             |
| Health     | ![travis][travis_shield] ![codacy][codacy_shield] ![coverage][coverage_shield] ![readthedocs][readthedocs_shield]  |
| Repository | ![issues][issues_shield] ![pulls][pulls_shield]                                                                    |
| Publishers | ![npm][npm_shield] ![npm_downloads][npm_downloads_shield]                                                          |
| Activity   | ![contributors][contributors_shield] ![monthly_commits][monthly_commits_shield] ![last_commit][last_commit_shield] |

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
git clone https://github.com/JoelLefkowitz/tinderbot
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

To run unit tests:

```bash
grunt tests:unit
```

To generate a coverage report:

```bash
grunt tests:coverage
```

## Documentation

This repository's documentation is hosted on [readthedocs][readthedocs].

To generate the sphinx configuration:

```bash
grunt docs:generate
```

Then build the documentation:

```bash
grunt docs:build
```

## Tooling

To run linters:

```bash
grunt lint
```

To run formatters:

```bash
grunt format
```

Before commiting new code:

```bash
grunt precommit
```

This will run linters, formaters, generate a test coverage report and the sphinx configuration.

## Versioning

This repository adheres to semantic versioning standards.
For more inforamtion on semantic versioning visit [SemVer][semver].

Bump2version is used to version and tag changes.
For example:

```bash
bump2version patch
```

## Changelog

Please read this repository's [CHANGELOG](CHANGELOG.md) for details on changes that have been made.

## Contributing

Please read this repository's guidelines on [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Contributors

- **Joel Lefkowitz** - _Initial work_ - [Joel Lefkowitz][joellefkowitz]

[![Buy Me A Coffee][coffee_button]][coffee]

## Remarks

Lots of love to the open source community!

![Be kind][be_kind]

<!-- Github links -->

[pulls]: https://github.com/JoelLefkowitz/tinderbot/pulls
[issues]: https://github.com/JoelLefkowitz/tinderbot/issues
[example]: https://github.com/JoelLefkowitz/tinderbot/raw/master/example.gif

<!-- External links -->

[readthedocs]: https://tinderbot.readthedocs.io/en/latest/
[semver]: http://semver.org/
[coffee]: https://www.buymeacoffee.com/joellefkowitz
[coffee_button]: https://cdn.buymeacoffee.com/buttons/default-blue.png
[be_kind]: https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif

<!-- Acknowledgments -->

[joellefkowitz]: https://github.com/JoelLefkowitz

<!-- Project shields -->

[release_shield]: https://img.shields.io/github/v/tag/joellefkowitz/tinderbot
[license_shield]: https://img.shields.io/github/license/joellefkowitz/tinderbot
[dependents_shield]: https://img.shields.io/librariesio/dependent-repos/pypi/tinderbot-puppet

<!-- Health shields -->

[travis_shield]: https://img.shields.io/travis/joellefkowitz/tinderbot
[codacy_shield]: https://img.shields.io/codacy/coverage/tinderbot
[coverage_shield]: https://img.shields.io/codacy/grade/tinderbot
[readthedocs_shield]: https://img.shields.io/readthedocs/tinderbot

<!-- Repository shields -->

[issues_shield]: https://img.shields.io/github/issues/joellefkowitz/tinderbot
[pulls_shield]: https://img.shields.io/github/issues-pr/joellefkowitz/tinderbot

<!-- Publishers shields -->

[npm_shield]: https://img.shields.io/npm/v/tinderbot-puppet
[npm_downloads_shield]: https://img.shields.io/npm/dw/tinderbot-puppet

<!-- Activity shields -->

[contributors_shield]: https://img.shields.io/github/contributors/joellefkowitz/tinderbot
[monthly_commits_shield]: https://img.shields.io/github/commit-activity/m/joellefkowitz/tinderbot
[last_commit_shield]: https://img.shields.io/github/last-commit/joellefkowitz/tinderbot
