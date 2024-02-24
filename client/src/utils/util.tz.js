export const convertTZ = (tz) =>{
    const date = new Date(tz);
    const options = {
        timeZone: 'Asia/Bangkok',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    };

    return { date,options }
}