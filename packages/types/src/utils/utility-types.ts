/**
 * Represents an object with string keys and unknown values.
 * Useful for handling objects with dynamic or unknown value types.
 */
export type UnknownObject = Record<string, unknown>

/**
 * Represents an object with string keys and values of any type.
 * Prefer `UnknownObject` where possible; use this only when the loose `any`
 * value type is genuinely required (for example, when passing objects through
 * untyped transforms).
 */
export type AnyObject = Record<string, any>
