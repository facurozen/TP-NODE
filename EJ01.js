
export function concatInvert(t1, t2) {
    const concatstr = t1 + t2;
   // const arraystr = concatstr.split('')
   // const invertidoStr = arraystr.reverse()
   // return invertidoStr.join('');

    return concatstr.split('').reverse().join('');
}