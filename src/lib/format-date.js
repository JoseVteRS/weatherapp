export const formatDate = (date) => {
    const newDate = new Date(date);
    const options = { weekday: "short", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("es-ES", options).format(newDate);
};
