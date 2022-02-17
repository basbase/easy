import { Text } from './Text';
import { Exception } from './Exception';
import { Response } from '../http';
import { Results } from './Results';
import { Result } from './Result';

export type ErrorOrigin = Text | Error | Exception | Response | Results | Result;
