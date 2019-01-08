/**
 * Created by samhwang1990@gmail.com.
 */

export default function timeRecord(handler): any {
    let hrstart = process.hrtime();
    
    let result = handler();

    let hrend = process.hrtime(hrstart);
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
    
    return result;
}
