# textlint-rule-no-isolated-waw [![Actions Status: test](https://github.com/aborazmeh/textlint-rule-no-isolated-waw/workflows/test/badge.svg)](https://github.com/aborazmeh/textlint-rule-no-isolated-waw/actions?query=workflow%3A"test") [![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/)

Ensures that the Arabic conjunction waw is properly connected to the following word and not written in isolation.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-isolated-waw

## Fixable

[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

```
textlint --rule no-isolated-waw --fix README.md
```

## Example

    ساعدت الفيزياء الجيوليجيين في الكشف عن عدد كبير من مكامن النحاس و الحديد  و النفط و الفحم و   الماء و الملح  و مواد البناء و  غيرها.

> ساعدت الفيزياء الجيوليجيين في الكشف عن عدد كبير من مكامن النحاس والحديد والنفط والفحم والماء والملح ومواد البناء وغيرها.

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "no-isolated-waw": true
    }
}
```

Via CLI

```
textlint --rule no-isolated-waw README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © aborazmeh
