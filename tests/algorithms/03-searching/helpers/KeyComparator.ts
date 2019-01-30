/**
 * Created by zhiyuan.huang@ddder.net.
 */

export function stringComparator(s1: string, s2: string): number {
    if (s1 == null) return -1;
    if (s2 == null) return 1;

    s1 = s1.toString();
    s2 = s2.toString();

    return s1.localeCompare(s2);
}

export function numberComparator(n1: number, n2: number): number {
    if (n1 == null) return -1;
    if (n2 == null) return 1;

    if (n1 === n2) return 0;
    return n1 > n2 ? 1 : -1;
}
