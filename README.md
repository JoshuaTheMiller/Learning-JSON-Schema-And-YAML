# Learning JSON-Schema + YAML

This uses yarn:

```ps1
yarn install
yarn run start
```

## Notes

* json-schema doesn't support merging of schemas, which would help reduce duplicate schema definition (allOf does not satisfy object inheritance or composition).
* defining multiple schemas nad using an array with "oneOf" combined with properties of type `const` allows for lists of multiple different schemas to still be validated (e.g. repo vs org in this case). Try changing the `type` of one of the items to either "org" or "repo" to see this in action.
  * This seems to be a better route then using [dependencies](https://json-schema.org/understanding-json-schema/reference/object.html#id8)... While more typing is required, the schemas themselves stay simplified. This also does not seem to be a proper use of dependencies, as orgs and repos are inherently different types of items.