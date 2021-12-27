export function numberFormatter(
    val: number | string,
    minimumFractionDigits: number
) {
    if (typeof val === 'string') {
        try {
            return Number(val).toLocaleString(undefined, {
                minimumFractionDigits,
            })
        } catch {
            throw new Error(
                'Requires a string that can be converted to a number.'
            )
        }
    }

    return val.toLocaleString(undefined, { minimumFractionDigits })
}
