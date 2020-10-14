import AJV, { ErrorObject } from "ajv"
import YAML from "yaml"
import * as fs from "fs"

const ajValidator = new AJV({ allErrors: true });
const communitySchema = JSON.parse(readFile("./schemas/someschema.json"));
const validate = ajValidator.compile(communitySchema);

// or, if you did not use type annotation for the schema,
// type parameter can be used to make it type guard:
// const validate = ajv.compile<MyData>(schema)

const toValidate = YAML.parse(readFile("./testdata/something.yml"));

const result = validate(toValidate);
if (!result) {
    for (let index = 0; index < validate!.errors!.length; index++) {
        const element = validate!.errors![index];

        console.log(element);
    }
}
else {
    console.log(result);
}

// if (validate(toValidate)) {
//   // data is MyData here
//   console.log("Good to go")
// } else {
//   // The type cast is needed to allow user-defined keywords and errors
//   // You can extend this type to include your error types as needed.
//   for (const err of validate.errors as DefinedError[]) {
//     console.log(err)
//   }
// }

function readFile(filePath: string) {
    return fs.readFileSync(filePath, 'utf8');
}