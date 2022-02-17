import { Json } from '../types';
import { Resource } from '../resources';
export declare class HealthResource implements Resource {
    ok: () => Promise<Json>;
}
