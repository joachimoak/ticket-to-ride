export default {
    post: {
        tags: ['User operations'],
        description: "Create user",
        operationId: "createUser",
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UserInput'
                    }
                }
            }
        },
        responses: {
            '201': {
                description: "User was successfully created!"
            },
            '500': {
                description: 'Server error'
            }
        }
    }
}
