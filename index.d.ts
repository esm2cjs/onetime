export interface Options {
	/**
	 * Throw an error when called more than once.
	 *
	 * @default false
	 */
	throw?: boolean;
}

declare const oneTime: {
	/**
	 * Ensure a function is only called once. When called multiple times it will return the return value from the first call.
	 *
	 * @param fn - Function that should only be called once.
	 * @returns A function that only calls `fn` once.
	 */
	<ArgumentsType extends unknown[], ReturnType>(
		fn: (...arguments: ArgumentsType) => ReturnType,
		options?: Options
	): (...arguments: ArgumentsType) => ReturnType;

	/**
	 * Get the number of times `fn` has been called.
	 *
	 * @param fn - Function to get call count from.
	 * @returns A number representing how many times `fn` has been called.
	 *
	 * @example
	 *
	 * import onetime from 'onetime';
	 *
	 * const foo = onetime(() => {});
	 * foo();
	 * foo();
	 * foo();
	 *
	 * console.log(onetime.callCount(foo));
	 * //=> 3
	 */
	callCount(
		fn: (...arguments: unknown[]) => unknown
	): number;
}

export default oneTime;
