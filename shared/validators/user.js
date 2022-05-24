import AJV from 'ajv';

const ajv = new AJV()

const schema = {
  type: "object",
  properties: {
    firstName: {type: "string", "minLength": 1},
    lastName: {type: "string", "minLength": 1},
    nickName: {type: "string"}
  },
  required: ['firstName' , 'lastName'],
  additionalProperties: false
}

const validate = ajv.compile(schema)

export default validate;