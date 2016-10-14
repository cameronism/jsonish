# jsonish

Turns nearly valid json into valid beautified json.

```javascript
jsonish(`{foo:1,bar:2,baz:[‘’,“”,''],}`)
//{
//    "foo": 1,
//    "bar": 2,
//    "baz": ["", "", ""]
//}
```

Handles fancy quotes and syntax that is valid JavaScript but not valid JSON (single quotes, no quotes, trailing commas).

## CLI

`cat almost.json | jsonish > pretty.json`

## License

MIT
