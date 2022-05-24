import AJV from 'ajv';

const ajv = new AJV()

const schema = {
  type: "object",
  properties: {
    transcription: {type: "string", "minLength": 1},
  },
  required: ['transcription'],
  additionalProperties: false
}

const validate = ajv.compile(schema)

export default validate;