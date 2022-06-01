

export const fetch = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        return {
            message: error,
            code: error.code
        }
    }

}