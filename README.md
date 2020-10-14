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
* Am still curious if there is some better way to manage the schema definition for endorsements of a repo that is part of an org. Right now, humans would know they are not required, but the schema still requires them... Should a separate definition of a repo be created? Called, *child repo*? Or is that unnecessary?
  * Added `org_repo` as a type to demonstrate this. Updated the repositories field of organization to support either `repo` or `org_repo` children.