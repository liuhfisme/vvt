import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/hello',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'Hello Mock'
            }
        }
    }
] as MockMethod[]