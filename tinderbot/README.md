# Tinderbot Puppet

Tinder pupeteer scripts

## Usage

![Example usage][example_gif]

### Status

| Source     | Shields                                                        |
| ---------- | -------------------------------------------------------------- |
| Project    | ![license][license] ![release][release]                        |
| Publishers | [![npm][npm]][npm_link]                                        |
| Downloads  | ![npm_downloads][npm_downloads]                                |
| Raised     | [![issues][issues]][issues_link] [![pulls][pulls]][pulls_link] |

### Installing with npm

```bash
npm install -g tinderbot-puppet
```

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
docker pull joellefkowitz/tinderbot-puppet
docker run -it --rm -p 9222:9222 joellefkowitz/tinderbot-puppet
```

The remote host and port are exposed as environment variables

- remoteHost = 0.0.0.0
- remoteBrowserPort = 9222

### Docs

Additional details are available in the [full documentation](https://tinderbot.readthedocs.io/en/latest/).

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

### Versioning

[SemVer](http://semver.org/) is used for versioning. For a list of versions available, see the tags on this repository. Releases are made on every major change.

### Author

- **Joel Lefkowitz** - _Initial work_ - [Joel Lefkowitz](https://github.com/JoelLefkowitz)

See also the list of contributors who participated in this project.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

### Acknowledgments

None yet!

<!--- Table links --->

[license]: https://img.shields.io/github/license/joellefkowitz/tinderbot
[release]: https://img.shields.io/github/v/tag/joellefkowitz/tinderbot
[npm_downloads]: https://img.shields.io/npm/dw/tinderbot-puppet
[npm]: https://img.shields.io/npm/v/tinderbot-puppet "npm"
[npm_link]: https://npm.org/project/tinderbot-puppet
[issues]: https://img.shields.io/github/issues/joellefkowitz/tinderbot "Issues"
[issues_link]: https://github.com/JoelLefkowitz/tinderbot/issues
[pulls]: https://img.shields.io/github/issues-pr/joellefkowitz/tinderbot "Pull requests"
[pulls_link]: https://github.com/JoelLefkowitz/tinderbot/pulls
[example_gif]: https://github.com/JoelLefkowitz/tinderbot/raw/master/example.gif "Example usage"
