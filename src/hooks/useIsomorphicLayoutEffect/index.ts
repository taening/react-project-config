/**
 * @author PaulSeo
 * @description
 */
import { useLayoutEffect, useEffect } from 'react';

import { isBrowser } from '../utils';

/**
 * SSR환경에서 useLayoutEffect를 사용하면 경고 메시지가 발생한다.
 *
 * 앞으로 useLayoutEffect가 필요한 경우 이 Hook을 사용한다.
 *
 * 브라우저 환경이면 useLayoutEffect, SSR환경이면 useEffect를 사용하도록 함.
 */
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
