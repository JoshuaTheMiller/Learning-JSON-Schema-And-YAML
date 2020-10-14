import AJV from "ajv"
import YAML from "yaml"
import * as fs from "fs"

const ajValidator = new AJV({ allErrors: true });
const communitySchema = JSON.parse(readFile("./schemas/someschema.json"));
const validate = ajValidator.compile(communitySchema);

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

function readFile(filePath: string) {
    return fs.readFileSync(filePath, 'utf8');
}