export function assertIsDefined<T>(
  val: T,
  variable?: string
): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error('Expected ' + (variable || 'value') + ' to be defined.');
  }
}
