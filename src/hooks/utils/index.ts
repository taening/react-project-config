/**
 * @author: PaulSeo
 * @description: Utils to make react hook
 */

/**
 * 런타임 환경이 개발 또는 테스트 모드인지 확인하는 변수
 *
 * (개발 | 테스트 모드이면 true, 아니면 false)
 */
export const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

/**
 * 랜더링 환경이 브라우저인지 SSR인지 확인하는 변수
 *
 * (브라우저이면 true, SSR이면 false)
 */
export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * 입력값이 undefined인지 아닌지 확인하는 함수
 * @param value 입력값
 * @returns true | false
 */
export const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined';

/**
 * 입력값이 Number인지 아닌지 확인하는 함수
 * @param value 입력값
 * @returns true | false
 */
export const isNumber = (value: unknown): value is number => typeof value === 'number';

/**
 * 입력값이 Boolean인지 아닌지 확인하는 함수
 * @param value 입력값
 * @returns true | false
 */
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

/**
 * 입력값이 String인지 아닌지 확인하는 함수
 * @param value 입력값
 * @returns true | false
 */
export const isString = (value: unknown): value is string => typeof value === 'string';

/**
 * 입력값이 Object인지 아닌지 확인하는 함수
 * @param value 입력값
 * @returns true | false
 */
export const isObject = (value: unknown): value is Record<string | number | symbol, unknown> =>
  value !== null && typeof value === 'object';

/**
 * 입력값이 Function인지 아닌지 확인하는 함수
 * @param value 입력값
 * @returns true | false
 */
export const isFunction = (value: unknown): value is (...args: unknown[]) => unknown => typeof value === 'function';
