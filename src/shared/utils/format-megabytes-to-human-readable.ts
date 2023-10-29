export const formatMegabytesToHumanReadable = (value: number): string => {
    const MEGABYTES_IN_GIGABYTES = 1024;
    return `${value / MEGABYTES_IN_GIGABYTES} Гб`;
};
