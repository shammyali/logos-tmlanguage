# Logos TextMate Grammar

TextMate grammar for Logos, the ML-family programming language built by Logos Technologies.

This package gives editors a stable `source.logosml` grammar for `.logos` files. It is usable by VS Code, Sublime Text, Atom-compatible grammar loaders, Zed, and GitHub Linguist.

## Files

- `logos.tmLanguage.json` is the TextMate grammar.
- `test/sample.logos` is real Logos source copied from the Vryx corpus.
- `test/sample.logos.snap` is the committed highlighting snapshot.

## Local Check

```sh
npm install
npm test
```

The test command validates the grammar JSON and runs TextMate snapshot tests over the sample.

## Language

- Compiler: https://github.com/shammyali/logos
- Scope: `source.logosml`
- Extension: `.logos`

## License

MIT
