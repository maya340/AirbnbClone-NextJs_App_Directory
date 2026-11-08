import {cache as reactCache} from 'react';
import { unstable_cache as nextCache} from 'next/cache';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (...args: any[]) => Promise<any>;
function cache<T extends Callback>(cb :T,keyParts : string[],options: { revalidate?: number | false; tags?: string[]; }) {
return nextCache(reactCache(cb),keyParts,options)
  
}

export default cache