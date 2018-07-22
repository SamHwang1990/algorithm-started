/**
 * Created by samhwang1990@gmail.com.
 */

export default function hasOwn(object: Object, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(object, key);
}