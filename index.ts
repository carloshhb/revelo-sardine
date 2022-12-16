import { execute } from "./getData";
import { validateTransport } from './type-predicates'

console.log('What kind of transport it that? (type predicates)')
validateTransport({ isUsableOnLand: true })

console.log('Executing Promises')
execute()